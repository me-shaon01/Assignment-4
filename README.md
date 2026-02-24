## Answers to Questions;

**1. getElementById, getElementsByClassName, querySelector/querySelectorAll এর পার্থক্য কি?**  
- `getElementById` - একটিমাত্র element ধরে যেটার id দেওয় থাকে।  
- `getElementsByClassName` - একাধিক element ধরতে পারে যাদের একই class আছে, তবে এটি live collection দেয়।  
- `querySelector` - যেকোনো CSS selector ব্যবহার করে, প্রথম matching element দেয়।  
- `querySelectorAll` - CSS selector দিয়ে সব matching element দেয়, সবগুলোকে একটি NodeList হিসেবে দেয়।  

---

**2. DOM এ নতুন element কিভাবে তৈরি ও insert করা হয়?**  
- প্রথমে `document.createElement()` দিয়ে element বানাতে হয়।  
- তারপর `element.innerText` বা `element.innerHTML` দিয়ে content দিতে হয়।  
- শেষে `parent.appendChild(newElement)` বা `insertBefore` দিয়ে DOM এ যুক্ত করতে হয়।  

---

**3. Event Bubbling কি? কিভাবে কাজ করে?**  
- Event bubbling মানে event bottom থেকে top দিকে চলে যাই।  
- উদাহরণ: কোন button এ click করলে প্রথম button handle করে, তারপর parent div, তারপর body handle হয়, এভাবেই মূলত Event bubbling কাজ করে।

---

**4. Event Delegation কি? কেন Useful?**  
- Parent element এ event listener দিয়ে child element এর events handle হয়।  
- এটা useful কারণ অনেক child থাকলে আলাদা listener দিতে হয় না, এবং dynamic elements এ ও কাজ করে।  

---

**5. preventDefault() এবং stopPropagation() এর পার্থক্য?**  
- `preventDefault()` – default browser action রোধ করে। যেমন link click করলে page reload বন্ধ করে। 
- `stopPropagation()` – event bubbling/propagation বন্ধ করে, parent element এ event পৌঁছাতে পারে না।  

---

> **Note:** এই এসাইনমেন্ট এ প্রশ্নগুলোর উত্তরগুলো সুন্দর ফরম্যাট করার জন্য, কিছু কনসেপ্ট বোঝার জন্য Google এবং AI-এর সাহায্য নেওয়া হয়েছে। তবে সব লেখা নিজে বুঝে এবং নিজের মতো করে লেখা হয়েছে।     

