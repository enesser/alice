# Auto Scaling Example

In this example, the typography scales to the browser size using *viewport width (vw)* units.

Note that with auto scaling, there comes a point where the text may get too small to read if kept completely proportional. That's why there's a reset point defined in a breakpoint in this example at **40.625em**.

![Sample Screenshot](https://cloud.githubusercontent.com/assets/5659221/9726692/230f0aca-55bc-11e5-8c47-211271a52066.gif)

> See a demo of text scaling to the browser on [CodePen](http://codepen.io/enesser/pen/LpPpJy).

### Building Assets

Running ``gulp`` by itself will build the Sass into CSS:

```shell
$ gulp
```

Running ``gulp watch`` will watch for Sass changes in the assets directory and build when files are modified.

If you’re not comfortable with the terminal, feel free to use the [CodePen](http://codepen.io/enesser/pen/LpPpJy) version.