# Progress

----------

__Current Reading__ 
- Section 8: course# 188 - Listened & practiced
- Section 8: course# 188 - Listening only

------------------
# template literals syntax
`` back ticks

# JavaScript built-in function
 - **alert**
 - **parseInt**
 - **+numVariable** => this will give number

# js file load early but do not block html page parsing
defer in script tag

# 4 types of looping in javascript
    for loop
    for-of loop
    for-in loop
    while loop
    do while loop
# functions
    bind(), apply(), call()

# array functions
    push(), pop(), shift(), unshift(), splice()



----------------------
# More on Version Control & Git
Git is a version control system (https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) that helps you control your source code. For example, you can easily go back to older states of your code or revert in case you mess up your code.

Using it, is totally optional! It's also not a tool that's related to JavaScript in any way - you can indeed use Git in ANY (programming) project.

Since it is optional and not directly related to JavaScript, I will not dive into Git in this course. Nonetheless, it's definitely a tool worth learning for every developer.

In case you are interested, this tutorial gets you started: https://academind.com/learn/web-dev/git-the-basics/

Besides local version control and code management, you can also push your projects and all your commits ("snapshots") to remote storages. The most prominent (free!) remote service is GitHub: http://github.com/

You can learn more about it here: https://academind.com/learn/web-dev/github-the-basics/

Also check out the official docs: https://git-scm.com/about

--------------

# Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).



The following resources may be helpful.

VS Code Docs: https://code.visualstudio.com/docs

VS Code Keybindings: https://code.visualstudio.com/docs/getstarted/keybindings

VS Code Extensions Docs: https://code.visualstudio.com/docs/editor/extension-gallery

Google Chrome DevTools Docs: https://developers.google.com/web/tools/chrome-devtools/

---

# Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).
The following resources may be helpful.

Control Structures (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

JavaScript Loops (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

----------

# Summary: Node Query Methods
Here's a summary of the various methods you got to reach out to DOM elements (note: you can only query for element nodes).

Besides the below query methods, you also got these special properties on the document object to select parts of the document:

    document.body => Selects the <body> element node.

    document.head => Selects the <head> element node.

    document.documentElement => Selects the <html> element node

**QUERY METHODS**

    document.querySelector(<CSS selector>);
Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns the first (!) matching element in the DOM. Returns null if no matching element could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

    document.getElementById(<ID>);
Takes an ID (without #, just the id name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns null if no element with the specified ID could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

    document.querySelectorAll(<CSS selector>);
Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns all matching elements in the DOM as a static (non-live) NodeList. Returns and empty NodeList if no matching element could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

    document.getElementsByClassName(<CSS CLASS>);
Takes a CSS class g (e.g. 'some-class') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

    document.getElementsByTagName(<HTML TAG>);
Takes an HTML tag (e.g. 'p') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

There also is the getElementsByName() method which really isn't used commonly (https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName).

-----

