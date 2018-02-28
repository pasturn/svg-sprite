# svg-sprite
## Init

```
$ npm install
```

devDependencies:
- gulp
- gulp-svg-symbols
- gulp-svgmin (optionial)

## Usage
You can download the icons from [iconmoon.io](https://icomoon.io/app/#/select) or [iconfont.cn](http://www.iconfont.cn) with .svg,  put those icons to ```/asset/svg/```, and then run the commond:
```
npm run start   //or
gulp sprites
```
there will be created two new files:
- svg-symbols.css
- svg-symbols.svg

Add a style
```
.icon{
    fill: #fff;
    width: 32px;
    height: 32px;
}
```
Add the svg-icon to the index.html where you want to insert a svg-icon
```
<svg class="icon">
    <use xlink:href="/assets/svg-symbols.svg#account"></use>
</svg>
```

You have to view the effect in a sever envirment.
