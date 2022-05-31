# Decompose App
DecomposeApp is a single page application (SPA) codded in react.js and node.js that given a word, generates all the valid words in english or spanish that can be done from the letters of the original one (valid decompositions). It achieves that, by generating all the possible permutations of variable length and cheking if it exist is the language database. 

## Why this app comes from an actual need?
My mom, and many of his friends, enjoy decomposing names of people since they believe it can use to predit their behaviour and success in life (I know, it is weird, but some people believe in astrology and that stuff). However, the problem of generating all decompositions of a word is `O(n!n)` complex. 
$$\sum_{i=1}^{n}nPi = \sum_{i=1}^{n}\frac{n!}{(n-i)!}\sim O(n!n) $$ 
<figcaption align = "center"><b>Number of decompositions of a word of n different characters</b></figcaption>

So doing it by hand is not feasible (even machines strugle since the a word of 10 characters has almost 10 million decompositions). For instance, they could only find around `7 valid decompositions` of the name 'Alejandro' in a lapse of 1 hour, while the program could find `279 valid decomposition` in spanish in just a matter of seconds.
## Try it
You can try the app in http://decompose-app-2.herokuapp.com/