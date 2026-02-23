## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:First, getElementById() selects an element using its id. It returns only a single element because an id should be unique in a document. It is fast and best suited when i need to target one specific element.

Second, getElementsByClassName() selects elements using a class name. It returns an HTMLCollection, which is array-like but not a true array. This collection is live, meaning it automatically updates if the DOM changes.

Third, querySelector() uses CSS selectors to find elements. It can select by id, class, tag name, attribute, and more. However, it always returns only the first matching element.

Finally, querySelectorAll() also uses CSS selectors, but it returns all matching elements as a NodeList. Unlike getElementsByClassName(), the NodeList is usually static, meaning it does not automatically update when the DOM changes.

### 2. How do you create and insert a new element into the DOM?

Ans: First, a new element is created using the document.createElement() method. This method allows us to create any HTML element dynamically. For example, document.createElement("div") creates a new <div> element.

Second, content and attributes are added to the newly created element. We can add text using textContent or innerText, and we can assign classes or other attributes using properties like className or setAttribute().

Third, the element is inserted into the DOM. To do this, a parent element is selected using methods like getElementById() or querySelector(), and then the new element is added using methods such as appendChild()

### 3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is a process in the DOM event system where an event starts from the target element and then propagates to its parent elements, one level at a time, until it reaches the root element.

When an event occurs on a specific element—such as a button click—the event is first handled by that element. After that, the same event moves upward to its parent element, then to the grandparent, and continues up through the DOM tree. This upward movement is called event bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation in JavaScript is a technique where instead of attaching event listeners to multiple child elements, we attach a single event listener to their common parent element. The parent then handles events for its children using event bubbling.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

 Ans: preventDefault() stops the default browser action (like form submission or link navigation), while stopPropagation() stops the event from bubbling up to parent elements.

## What to submit:

1. GitHub Repository Link: https://github.com/Saddam2508/B13-A04-saddam
2. Live Site Link:https://saddam2508.github.io/B13-A04-saddam
