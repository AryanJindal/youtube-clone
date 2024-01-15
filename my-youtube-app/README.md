
## useSearchParams 

## debouncing 
- slow typer ==> made api calls for each and every key stroke
- fast typer ==> made API calls after some particular duration ==> do not going to need much suggestions

Debouncing with 200ms ==> means if diff b/w two key strokes if 200ms or less, then decline the API call, else make an API call and show the results because user has stopped typing and might need the results now.

## Memorization for caching of suggestion results

## n-level nested comments


## Live chat 

- **Fetching live data** 
  - using web sockets(Trading apps, whats-app)
    - A two way connection b/w server and the web-UI, a bi-directional data transfer
  - API polling(G-mail, match live score fetching in live somehat 25 secs)
    - A one directional connection b/w server and UI
    - happens after a particular(Not fixed though) interval
- appending to the live chat container
- preventing my app from frrezing since a lot of divs are going to get add
    - Why my page freeze ==> when the size becomes too high. 
    - can i prevent it ?
    - So, what i will do is only keep last 200-300[depending on the browser's storage capacity/Harware which it can store] messages and delete rest


## useMemo

- Caches the value returned by the fn
const nthPrime  =  useMemo(fnToBeCalled, dependency_Of_the_fn)

## useCallBack

- Caches a fn defination