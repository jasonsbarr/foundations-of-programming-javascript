# Computers and programming

This is a course about learning to program computers.

"Well, duh," you might say, but have you thought about what that really means? And what exactly *is* a computer?

When you can answer the second question, that goes a long way towards answering the first: what is a computer?

## The first computers

Today we think of computers as electronic machines that do all sorts of things for us, but the first "computers" were actually human beings.

In fact, the earliest reference to the word "computer" comes from a book published in 1613.

It was talking about a person who did mathematical calculations.

"Computer" as a term was used exclusively in this manner until mechanical computing machines became more commonplace around the late 19th century.

## Early electronic computers

![UNIVAC I, one of the first commercially available electronic computers](../img/UNIVAC-I-BRL61-0977.jpg)
<p class="caption"><i>UNIVAC I, one of the first commercially available electronic computers</i></p>

The first electronic computers were build about the time of World War II, and they were *huge*&mdash;big enough to fill a room... or even *several* rooms.

They were also *enormously* expensive. The UNIVAC I, an early commercial computer first sold to the US Census Bureau and the US Air Force, sold at a price between $1,250,000 and $1,500,000, which was over $12 million in 2020 dollars!

Advances in engineering helped us build smaller and smaller computers that were ever more powerful, to such an extent that you can now carry a fully-functional computer in your pocket that has massively more computing power than the room-sized behemoths of the past.

## Computers, computing, and computer science

A computer's job, whether human or electronic, is to do the work of *computing*. To oversimplify in the extreme, **computing** is the act of calculating the solution to a problem. This is true whether the problem is mathematical/numeric, scientific, literary, artistic, or from some other domain.

This necessarily brings us to the topic of computer science. You don't need to educate yourself on the fine details of computer science to be a programmer, but it helps to at least have a solid grounding in the fundamentals.

If computers do the work of computing, and if computing is the act of calculating solutions, then computer science is the study of how computing works. We might broadly say it seeks to answer these 3 questions:

1. What can we compute?
2. How can we best compute it?
3. What can we do with the result?

For those of us who are just starting in our journey with computers and programming, the answers to questions 2 and 3 are most pertinent. They give us an excellent starting point for thinking about programming a computer.

## Programming and programs

The act of **programming** a computer is fundamentally about telling a computer what to do in order to calculate some result, and what to do with it. It's as simple as that!

At its most basic level, a **program** is simply a piece of written language that tells the computer to perform a certain computation.

How exactly a program is written depends on many things: the programming language, the programmer's style, and in some cases even the machine the program is written for.

For example, a program can have detailed instructions on *how* the computer should compute a solution. This is known as **imperative** programming style.

A program could also simply tell the computer *what to do*, and let it handle the steps itself. This is **declarative** programming style.

Some languages require you to use one style or the other, but JavaScript is flexible enough to let you mix the two styles as appropriate for your programs. In this course you'll become fluent in both styles and learn a bit about how to determine what style is best for the task you're trying to accomplish.

## Programming languages

Programming languages have come a long way since the earliest computers. They had to be programmed in binary, meaning you had to actually tell the computer the exact values to read and write to perform a computation. That's because computers don't read human languages; they only communicate in binary, which is a number system made up only of 1s and 0s.

This was extremely inefficient and error-prone, so computer scientists invented programming languages that could be compiled and interpreted.

**Compiled** programs are run through a translator program that turns a human-readable program into machine language so it can be executed.

**Interpreted** programs are run through a translator program that executes the program's instructions on the fly, without the intermediate step of compiling. They are usually slower than compiled programs because the computer has to translate the code into a format it can read line-by-line instead of having it done in advance.

JavaScript is technically an interpreted language, though modern JavaScript engines blur the lines between compiling and interpreting the code with a specialized technique known as **Just-In-Time** compiling. This allows your browser and other JavaScript runtime environments to work more efficiently without making you compile the code to binary in advance.

A **runtime environment** is a kind of container program that allows a language to run inside it. The runtime handles the interaction between the programming language and the computer itself.

## Aside: Symbolic programming

**Symbolic programming** is the use of *symbols*, such as words, images, musical notation, etc. in computing. Symbolic programming allows us to think of computers as more than just mathematical or engineering devices, and to apply computing to the whole range of human life to solve any number of problems in vastly different domains.

Ada Lovelace was a 19th century writer and mathematician who worked with the inventor Charles Babbage to popularize his work, which included designs for early mechanical computers. His design for the Analytical Engine has been proven to be capable of performing any computation a modern computer can execute. Babbage only regarded the device for its potential mathematical and scientific capabilities; however, Lovelace wrote:

<blockquote>[The Analytical Engine] might act upon other things besides number, were objects found whose mutual fundamental relations could be expressed by those of the abstract science of operations, and which should be also susceptible of adaptations to the action of the operating notation and mechanism of the engine...Supposing, for instance, that the fundamental relations of pitched sounds in the science of harmony and of musical composition were susceptible of such expression and adaptations, the engine might compose elaborate and scientific pieces of music of any degree of complexity or extent.</blockquote>

Thus Lovelace anticipated the implications of modern computing, which is used in just about every area in which humans work and play, to a far greater degree than even the designer of the first complete computer could even imagine.

Let's start learning how to make her vision a reality with JavaScript!
