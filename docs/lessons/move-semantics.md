---
title : Move semantics
benefit: 3
easiness: 3
order: 3
tags:
    - C++
---

## Brief

You all know what copying an object means. But did you know that we can do better in some circumstances?

`move` is an optimization of `copy`. For example consider:

```cpp
std::vector<int> create_n_integers(int n) {
    std::vector v;
    for (int i = 0; i < n; ++i) {
        v.push_back(n);
    }
    return v;
}

std::vector<int> my_vector = create_n_integers(10000000);
```

It might look like we are doing a copy: a vector is created inside `create_n_integers` and then when we do `my_vector = create_n_integers(10000000)` we copy the vector from `create_n_integers` into `my_vector`. And you know that a vector can be big and therefore its copy can be expensive! All of that is true, but the above code is still perfectly fine. This is because the compiler knows that there is no need to do a copy and that it can do a move instead: same effect, but faster.

**So, what is a move?** The idea is that when an object is about to be destroyed, there is no need to keep that object intact ; our "copy" is therefore allowed to modify it: that "destructive copy" is called a *move*.

Why would modifying the "copied" object be useful? Let's take the example of a `std::vector<int> v1`. A vector is implemented as a pointer to an array of elements on the heap. If we ask for a *copy* of the vector (`std::vector<int> v2 = v1;`) then it has to copy all the elements of the array into a new array, because we want `v1` and `v2` to be independent objects. If we were to only copy the pointer, then `v1` and `v2` would point to the same array and modifying `v1` would also affect `v2`, which would be very confusing and impractical.
Therefore making a copy of a big vector is slow because each of the (possibly many) elements of the vector has to be copied. **But** if we know that `v1` is no longer used, then we don't care if it points to the same array as `v2`! There is no way of touching `v1` and accidentaly modifying `v2`! In that case we can simply copy the pointer and save a lot of time.

:::tip
This is the power of *move*: the compiler optimizes your *copy* when it knows that you won't see the difference between a copy and a move.
:::

So, do you need to think about *move* all the time? Luckily, no! It will happen automatically in places where it can. Just remember that having a function that returns a vector by value is not a bad thing because the copy will be optimized into a move, which is cheap.

## Implementing move for your own classes

For most of your classes a move constructor will be defined automatically (just like the copy constructor) and you have nothing to do.
The only time where you need to implement *move* yourself is if your class has an explicitly defined destructor or copy constructor (see [The Rule of 5](./rule-of-5)). This should be rare because if all the members of your class already have move and destruction defined, then your class will get a default move and destructor that will do the right thing and everything will be fine.

The only case where you would need to define destruction and move is when you manage a resource like a pointer, an object from a C api that needs to be freed, *etc.* Note that in the case of a pointer the problem is already solved by `std::unique_ptr` and `std::shared_ptr`. Please don't allocate your pointers with raw `new` and don't add destructors to your classes just to manage the pointers that you allocated. Use `std::unique_ptr` instead and you won't even need to think about destructors and move constructors.
If you ever need to create a wrapper similar to a `std::unique_ptr` for some resource (like an OpenGL id), here is how to do it:

```cpp
class UniqueBuffer {
public:
    UniqueBuffer()
    {
        glGenBuffers(1, &_id); // Do whatever you need to create the resource
    }
    ~UniqueBuffer()
    {
        glDeleteBuffers(1, &_id); // Do whatever you need to delete the resource
    }
    UniqueBuffer(const UniqueBuffer&) = delete;            // We disable copying
    UniqueBuffer& operator=(const UniqueBuffer&) = delete; // We disable copying
    UniqueBuffer(UniqueBuffer&& rhs) noexcept // Move constructor
        : _id{rhs._id}
    {
        rhs._id = 0; // Make sure rhs won't delete the _id we just copied
    }
    UniqueBuffer& operator=(UniqueBuffer&& rhs) noexcept // Move assignment operator
    {
        if (this != &rhs) {           // Make sure we don't do silly things if we try to move an object to itself
            glDeleteBuffers(1, &_id); // Delete the previous object
            _id     = rhs._id;        // Get the new object
            rhs._id = 0;              // Make sure rhs won't delete the _id we just copied
        }
        return *this; // move assignment must return a reference to this, so we do it
    }

    GLuint operator*() const { return _id; } // The getter for the wrapped `_id`. You can also have it as a function called id() but I like to use the dereference operator for that purpose (*my_wrapper).

private:
    GLuint _id;
};
```

Many things to note:

- We disable copying because we can't simply copy the `_id` (the copy would refer to the same object as the original, which would we confusing just like in our vector example), and we can create a new object with `glGenBuffers` because we have no idea what was stored in that buffer by users (if we were to try that, then when users ask for a copy they would get a new empty buffer instead of a copy of all the vertex data or whatever that was added to that buffer). Disabling copy also prevents accidental copies of objects that are not supposed to be copied (e.g. because they are big and the copy would be expensive).
- We do `rhs._id = 0;` when we move. This is because if we don't, then when `rhs` gets destroyed it will destroy `_id` and our new object will become invalid!
- We do `if (this != &rhs)`. This is because someone could call `v = std::move(v);` (in generic code it can happen and it is not that obvious and sometimes you need to do it). In such case, without the check we would do `rhs._id = 0;` but since `rhs` is ourself we just lost our `_id`!
- The signature for move operations contains `UniqueBuffer&&`. This `&&` symbol is called an r-value reference ; it is kind of like the usual reference `&` but it indicates that you are allowed to modify the object and steal its resources. Basically it means that it is okay to move from that object. 
- The move constructor and move assignment are marked `noexcept` which is **extremely important**. If you don't then STL containers like vector will not use your move and will do a copy instead (because it would be problematic if an exception was thrown while a vector is resizing and moving objects to the new location). This `noexcept` costs you nothing and allows great performance improvements when you store your objects in a vector, so please don't forget it!

:::tip
Make your wrappers as small as possible. Because if you need to define a move constructor in a big class then you need to tell it to move each member variable, which is tedious and error prone. Plus you will probably need that resource in several classes and you don't want to have to repeat the destruction code in each of them.

*You can find examples of such wrappers in [GL++](https://github.com/CoolLibs/glpp/blob/main/src/UniqueBuffer.h)*.
:::

<!-- ## Return value optimization (RVO)

Sometimes the compiler can do *even better than move*. When you are returning -->

## Going further

:::info Going further
TODO put a link to Klaus' conference when the CppCon 2021 is available on Youtube.
<!-- [Klaus Iglberger] -->
:::