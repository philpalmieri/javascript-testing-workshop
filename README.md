# javascript-testing-workshop
Workshop: What, Why, and How on Writing tests in JavaScript for NodeJS | Project Codex : Orlando Juniors



| TIME | |
|---|---|
| 10:00 - 10:30 | Welcome / Intros / Sponsors? |
| 10:30 - 10:45 | What is testing, vocabulary |
| 10:45 - 11:00 | Why are we testing |
| 11:00 - 11:30 | Hands on #1 / Hello World (everyone is up and running?) |
| 11:30 - 12:00 | Lunch / Help with setup  (eat while we work) |
| 12:00 - 13:15 | Hands on #2 / Coin Return App |
| 13:15 - 13:30 | Break / Extra Help |
| 13:30 - 14:00 | Demo: Hard to test code is a code smell |
| 14:00 - 15:30 | Hands on #3 / Full Weather App w/Mocks |
| 15:30 - 15:45 | Extra Time Buffer / Adding Travis / GH Auto Running / Badge |
| 15:45 - 16:00 | Closing / sponsor note? |
| 16:00 - ??:?? | Grab drinks, additional help, tbd |

# What
- TDD: Fail, Pass, Repeat
- Types
  - Unit - one single component/function in isolation
  - Integration - multiple coordinating components
  - Feature: User feature
  - Acceptance: Collection of features
  - End to End : All of it in a user/consumer experience
  - Regression: Did I do that?
- SEAT: Setup, Execute, Assert, Teardown
- Mocks & Stubs
  - Fake it till you make it
  - Don’t mess with other test’s data

# Why
- Find Early
- Update with confidence
- Think through edge cases
- Don’t trust your future self
- Think about business requirements and make them work
- Think about exceptions and edge cases and make them work/fail gracefully

# How
- Initial simple hello ‘name’
  - Setup test
  - Add watcher
  - Change test to have comma
  - Reload
- Coin return ( $1.00 - $.10 = $.25x3, $.10x1, $.05x1)
  - Expected results test
  - Run business rule suite with data provider
  - invalid coin exception
  - What about bills?
  - Handle Exceptions?
- Weather
  - Address -> Zipcode -> weather
  - Geocode Address
  - Handle Weather response and unknown
  - Handle Address unknown/error, 2 results? hot/cold/rain
  - Travis
