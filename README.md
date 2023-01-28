# x-leaderboards
Workout Leaderboard site that takes in a whatsapp chat export, and gives rankings

![image](https://user-images.githubusercontent.com/13544609/215296228-61bccffc-4176-4cb1-a767-9f7fb4bd993c.png)

## Give it a go!

https://www.x.matthewcm.dev/

## Technology

- Built with Vite. Super quick bundling!
- Built with Vite React SWC. https://swc.rs/
>  SWC is 20x faster than Babel on a single thread and 70x faster on four cores.
- Typescript


## Context

Me and my friends use a whatsapp group to track our workouts, and encouragements to not be lazy.

Format of a workout is as follows:

1.
```
[picture]
x. run
```

2.
```
X went to gym
```

3.
```
x spin class
```

## How app works.

Takes in a whatsapp export.

Extracts all the messages, and creates an Object of:
```
{
author,
date,
messages
}
```

after this, some regex, sorting, and functional programming = this site.
