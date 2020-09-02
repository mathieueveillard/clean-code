% Clean Code Training
% Sept. 2020

# Clean Code

A. Why is Clean Code important?
B. What is it and what are its main principles?
C. How to apply it on legacy code?

# A. Why is Clean Code important?

# Value System

> We abandon our code early, not because it is done, but because our value
system focuses more on outward appearance than on the substance of what we deliver.

James O. Coplien in the Foreword of Clean Code, 2008

# Small things matter

> God is in the details, said the architect Ludwig mies van der Rohe.

James O. Coplien in the Foreword of Clean Code, 2008

# A Fragile Premise

> this book is based on a rather fragile premise: that good code matters...

Clean Code, 2008, p. 3

# Fact or Myth?

- Code is no longer the issue.
- We should be concerned about models and requirements.
- We are close to the end of code.
- Soon all code will be generated instead of written.

# Fact or Myth?

- Code is no longer the issue. False!
- We should be concerned about models and requirements. False!
- We are close to the end of code.  False!
- Soon all code will be generated instead of written. False!

# Detailed specification is code

> We will never be rid of code, because code represents the details of the requirements. At some level those details cannot be ignored or abstracted; they have to be specified. And specifying requirements in such detail that a machine can execute them is programming. Such a specification is code.

Clean Code, Robert C. Martin, 2008, p. 33

# A Killer App

> I know of one company that, in the late 80s, wrote a killer app. [...] Load times grew and crashes increased. I remember the day I shut the product down in frustration and never used it again. The company went out of business a short time after that.
> Two decades later I met one of the early employees of that company and asked him
what had happened. [...] They had rushed the product to market and had made a huge mess in the code. As they added more and more features, the code got worse and worse until they simply could not manage it any longer.
> It was the bad code that brought the company down.

Clean Code, Robert C. Martin, 2008, p. 3

# Conclusion

Clean Code is important because:

- we, programmers, will always work with code;
- bad code makes our live hard;
- bad code may produce bad software and put your company down.

We should apply clean code principles because:

- We don't know better way to reduce risk of bad software.
- We don't want to use bad software.
- In practice, you can turn bad code into clean code.

# B. What is it and what are its main principles?

# Measurement of Code Quality

WTF/min

# General Design Principles

- YAGNI: You aren't gonna need it (Always implement things when you actually need them).
- KISS: keep it simple, stupid.
- DRY: Don't repeat yourself.

# Beck's Design Rules

1. Passes the tests
1. Reveals intention
1. No duplication
1. Fewest elements

https://martinfowler.com/bliki/BeckDesignRules.html

# Principles of Object Oriented Class Design

SOLID principles:

- Open Closed Principle (OCP): A module should be open for extension but closed for modification.
- Liskov Substitution Principle (LSP): Subclasses should be substitutable for their base classes.
- Dependency Inversion Principle (DIP): Depend upon Abstractions. Do not depend upon concretions.
- Interface Segregation Principle (ISP): Many client specific interfaces are better than one general purpose interface.

http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod

# General Responsibility Assignment Software Patterns

GRASP patterns:

- High Cohesion 
- Low Coupling
- Polymorphism
- Information Expert
- Creator
- Pure Fabrication
- Controller
- Indirection

Extreme Programming Installed, Ronald E. Jeffries, Ann Anderson, Chet Hendrickson, 2001

# Clean Code Smells & Heuristics

Comments: 

- C1: Inappropriate Information
- C2: Obsolete Comment
- C3: Redundant Comment
- C4: Poorly Written Comment
- C5: Commented-Out Code

# Clean Code Smells & Heuristics

Environment:

- E1: Build Requires More Than One Step
- E2: Tests Require More Than One Step

# Clean Code Smells & Heuristics

Functions:

- F1: Too Many Arguments
- F2: Output Arguments
- F3: Flag Arguments
- F4: Dead Function

# Clean Code Smells & Heuristics

General:

G1: Multiple Languages in One Source File,
G2: Obvious Behavior Is Unimplemented,
G3: Incorrect Behavior at the Boundaries,
G4: Overridden Safeties,
G5: Duplication,
G6: Code at Wrong Level of Abstraction,
G7: Base Classes Depending on Their Derivatives,
G8: Too Much Information,
G9: Dead Code,
G10: Vertical Separation,
G11: Inconsistency,
G12: Clutter

# Clean Code Smells & Heuristics

General (suite):

G13: Artificial Coupling,
G14: Feature Envy,
G15: Selector Arguments,
G16: Obscured Intent,
G17: Misplaced Responsibility,
G18: Inappropriate Static,
G19: Use Explanatory Variables,
G20: Function Names Should Say What They Do,
G21: Understand the Algorithm,
G22: Make Logical Dependencies Physical,
G23: Prefer Polymorphism to If/Else or Switch/Case,
G24: Follow Standard Conventions

# Clean Code Smells & Heuristics

General (suite):

G25: Replace Magic Numbers with Named Constants, G26: Be Precise
, G27: Structure over Convention, G28: Encapsulate Conditionals
, G29: Avoid Negative Conditionals, G30: Functions Should Do One Thing
, G31: Hidden Temporal Couplings, G32: Don't Be Arbitrary
, G33: Encapsulate Boundary Conditions, G34: Functions Should Descend Only One Level of Abstraction, G35: Keep Configurable Data at High Levels, G36: Avoid Transitive Navigation

# Clean Code Smells & Heuristics

- Naming, comment, antisymmetry, one level of abstraction per function (SLAP: same level of abstraction principle), command query separation, no side effect, prefer to exception to error code, don’t repeat yourself, newspaper style, small method, do one thing, small parameter list, small class, small cyclomatic complexity, encapsulation, single responsibility principle, cohesion)

Clean Code, Robert C. Martin, 2008

# C. How to apply it on legacy code?

# Refactoring

> Refactoring is a systematic process of improving code without creating new functionality that can transform a mess into clean code and simple design.

https://refactoring.guru/

# Boy Scout Rule

> Leave your code better than you found it

https://deviq.com/boy-scout-rule/

# Competing Principles

- Design but not to much in front
- Refactor but not without test
- High cohesion but low coupling