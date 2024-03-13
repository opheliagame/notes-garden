Functions are made of building blocks of 1 unit amplitude sine waves at different frequencies. 

$$
wave = 2 * (wave of frequency f) + 1 * (wave of frequency 2f)
$$
```chart
type: bar
labels: [f, 2f, 3f]
series:
  - title: "frequency"
    data: [2, 1, 0]
tension: 0.2
width: 80%
labelColors: false
fill: false
beginAtZero: false
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
```

(imagine these bars as single lines please, couldn't figure out how to do that)

wider the original function, narrower the Fourier transform and vice versa