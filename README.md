# Ascii Art Reverse

This package is essentially a rainbow being
farted from the aft portion of a unicorn. It's pure magic.

# Install

`npm install ascii-art-reverse`

# Usage

```javascript
var reverse = require('ascii-art-reverse');

var art = [
  '    ("-^-/")  ',
  "    `o__o' ]  ",
  "    (_Y_) _/  ",
  "  _..`--'-.`, ",
  " (__)_,--(__) ",
  "     7:   ; 1 ",
  "   _/,`-.-' : ",
  "  (_,)-~~(_,) "
].join('\n')

console.log(reverse(art));
```

### Output:

```
 ("\-^-")   
 [ 'o__o`   
 \_ (_Y_)   
,`.-'--`.._ 
(__)--,_(__)
1 ;   :7    
: '-.-`,\_  
(,_)~~-(,_) 
```

Like I said, __MAGIC__.
