# Alice

These files are my course materials for *Intro to Designing in the Browser: Creating a Web Prototype with Responsive Typography* – an interactive presentation I delivered for [Designory](http://www.designory.com) in Chicago, Nashville, and Long Beach in August of 2015.

In this short course, we transformed blocks of text from Lewis Carrol’s *Alice’s Adventures in Wonderland* into an attractive responsive website by selecting and setting type. We also created a responsive prototype that designers can use to experiment with web fonts before incorporating them into their designs.

![Sample Screenshot](https://cloud.githubusercontent.com/assets/5659221/9574744/4b4938ea-4f8f-11e5-91f7-82de3b3a8d90.png)

> See a demo of what we did on [CodePen](http://codepen.io/enesser/pen/JdgKjX).

**or**

> See a demo of text scaling to the browser on [CodePen](http://codepen.io/enesser/pen/LpPpJy).

## Breakdown of the Course

## Getting Started with the Materials

## Building and Running the Materials

## Course Q&A

**When we talked about progressively loading in fonts asynchronously, would we display system fallback fonts until custom web fonts load?**

Yes. Remember we talked about progressive loading so that the user doesn’t see a blank screen (especially on mobile) for 3-4 seconds while  custom fonts are loading.

A good bookmarklet tool I use to adjust my fallback font stack is [ffffallback](http://ffffallback.com/) because it overlays your custom typefaces over the fallback ones and you can see how well they line up.

When using something like [Web Font Loader](https://github.com/typekit/webfontloader), you’ll have CSS classes and JavaScript events that you can style against while fonts are loading or have failed to load. The idea is to make your fallback typography as close to your custom typography so that the user doesn’t notice the new fonts snapping into position when they finally load.

**Can you control widows and orphans in CSS?**

Yes. See the [widows](https://developer.mozilla.org/en-US/docs/Web/CSS/widows) and [orphans](https://developer.mozilla.org/en-US/docs/Web/CSS/orphans) properties on MDN. Feel free to send me what you’re working on if you need help.

**I don’t like how the text wraps around the image. Can you fine tune the margin between the image and text?**

For ultimate control over how text wraps next to images, there’s [CSS shapes](http://alistapart.com/article/css-shapes-101) which has has a [polyfill](http://codepen.io/adobe/details/3b079a5671f21d140f47ffce3801ddfa/) available for decent browser support. I’ll be doing some proof of concept work on CSS shapes soon. CSS shapes make all kinds of exciting next level designs possible.

**Can you show an example of a pull quote?**

A pull quote has been added to the exercise and demos.

**Is there a way you can have CSS replace characters like straight quotes (') with proper curly quotes (‘’)?**

There is no way to do this in CSS. In my pull quote example, you can see how I automatically insert a curly double quote (“) for the quotation using a psuedo-element so the user doesn’t have to type it.

But if you want to do a character replacement, there are JavaScript frameworks that will do it. Additionally I’ve worked with the API of web word processors like TinyMCE and RadEditor to do character replacement as you type.

I also just found an HTML pre-processor called [Typeset](https://github.com/davidmerfield/typeset). We could very easily plug something like this into our content management systems on a publish event.

**What is the difference between tracking and kerning?**

Tracking is the overall spacing between letters. Kerning is the offset spacing between certain letter pairs (such as when an ‘f’ appears next to a ‘t’) that have been specifically included in a kerning table in the font.

**Can you show a sample of text that scales automatically with the browser size?**

I have added this as an example in the ``auto-scale`` folder. You can see a live demo on [CodePen](http://codepen.io/enesser/pen/LpPpJy).

## Typography Shortcuts for Quotation

Good typography uses curly quotes. The straight quotes come to us from the physical constraints of the typewriter and can make typography look industrial.

    | Description           | Windows     | Mac                | HTML
--- | --------------------- | ----------- | ------------------ | -----
'   | straight single quote | '           | '                  | '
"   | straight double quote | "           | "                  | "
‘   | opening single quote  | alt + 0145  | option + ]         | &lsquo;
’   | closing single quote  | alt + 0146  | option + shift + ] | &rsquo;
“   | opening double quote  | alt + 0147  | option + [         | &ldquo;
”   | closing double quote  | alt + 0148  | option + shift + [ | &rdquo;

## Typographic Scale

We used the [golden ratio](https://en.wikipedia.org/wiki/Golden_ratio) (1:1.618) to establish vertical rhythm in our exercise. You can use something subliminally sexy like a musical scale from a cabaret song for a Las Vegas advertisement.

When designing with a scale, trust your eye more than the scale. Remember we scaled content at 80% vs. 60% for article header elements on mobile.

We used a site called [Modular Scale](http://www.modularscale.com/) to assist us with the scale. There are also [Sass frameworks](https://github.com/modularscale/modularscale-sass) for modular scale.

Element              | Size
-------------------- | ----------------------------
title                | 4.236em
author               | 2.618em
subtitle             | 1.618em
paragraph leading    | 1.618em
element leading      | 0.618em

## Mapping for Design Terminology to CSS

These are the mappings of design terminology to CSS properties. In my Sass modules, I always include variables named to align with design terminology at the top to provide easy access to designers.

Design                     | CSS Property
-------------------------- | ------------------------------------
size of type               | [font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
weight                     | [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
typeface families          | [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
tracking                   | [letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
kerning                    | [font-kerning](https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning)
measure                    | [max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width), [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
leading (between elements) | [margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin), [margin-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
leading (inside elements)  | [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
widows                     | [widows](https://developer.mozilla.org/en-US/docs/Web/CSS/widows)
orphans                    | [orphans](https://developer.mozilla.org/en-US/docs/Web/CSS/orphans)

## Additional OpenType Features in CSS

These additional features can be enabled with OpenType fonts in CSS. Documentation is available from [TypeKit](http://help.typekit.com/customer/portal/articles/1789736-syntax-for-opentype-features-in-css) with illustrations.

Design                         | CSS Property
------------------------------ | ------------------------------------------------
common ligatures               | font-variant-ligatures: common-ligatures
contextual alternate ligatures | font-variant-ligatures: contextual
discretionary ligatures        | font-variant-ligatures: discretionary-ligatures
small caps                     | font-variant-caps: small-caps
capitals to small caps         | font-variant-caps: all-small-caps
swashes                        | font-feature-settings: 'swsh'
stylistic alterate swashes     | font-feature-settings: 'salt'
lining figures                 | font-variant-numeric: lining-nums
oldstyle figures               | font-variant-numeric: oldstyle-nums
proportional figures           | font-variant-numeric: proportional-nums
tabular figures                | font-variant-numeric: tabular-nums
fractions                      | font-variant-numeric: diagonal-fractions
ordinals                       | font-variant-numeric: ordinal

## Resources

* [Modular Scale](http://www.modularscale.com/)
* [Sass calculator for modular scale](https://github.com/modularscale/modularscale-sass)
* [FFFFallback font fallback bookmarklet tool](http://ffffallback.com/)
* [Web Font Loader for progressively loading fonts from Google and TypeKit](https://github.com/typekit/webfontloader)
* [Syntax for OpenType features in CSS from Adobe TypeKit](http://help.typekit.com/customer/portal/articles/1789736-syntax-for-opentype-features-in-css)
* [CSS Shapes article on A List Apart](http://alistapart.com/article/css-shapes-101)
* [CSS Shapes Polyfill](http://codepen.io/adobe/details/3b079a5671f21d140f47ffce3801ddfa/)
* [Controlling widows from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/widows)
* [Controlling orphans from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/orphans)
* [Contrast Ratio Calculator for WCAG 2.0 compliance by Lea Verou](http://leaverou.github.io/contrast-ratio/)

## Contributions

## License

*Alice’s Adventures in Wonderland* is by Lewis Carroll. 

The illustration of Alice is by Sir John Tenniel.

Other content by Eric J Nesser, 2015. MIT