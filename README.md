# javascript-testing-workshop
Workshop: What, Why, and How on Writing tests in JavaScript for NodeJS | Project Codex : Orlando Juniors

https://docs.google.com/presentation/d/1q8AAqh9D3v-B1QnW3omUUiMRMc2gehwBnWLjAGAGMyM/edit?usp=sharing

| TIME | |
|---|---|
| 10:00 - 10:30 | Welcome / Intros / Sponsors? |
| 10:30 - 10:45 | What is testing, vocabulary |
| 10:45 - 11:00 | Why are we testing |
| 11:00 - 12:00 | Hands on #1 / Hello World (everyone is up and running?) |
| 12:00 - 12:45 | Lunch / Help with setup  (eat while we work) |
| 12:45 - 13:15 | Demo: Hard to test code is a code smell |
| 13:15 - 15:15 | Hands on #3 / Full Weather App w/Mocks |
| 15:15 - 15:45 | Extra Time Buffer / Adding Travis / GH Auto Running / Badge |
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
  - Handle Exceptions?
- Weather
  - Address -> Zipcode -> weather
  - Geocode Address
  - Handle Weather response and unknown
  - Handle Address unknown/error, 2 results? hot/cold/rain
  - Travis
