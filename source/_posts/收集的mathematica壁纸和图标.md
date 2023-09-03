---
title: 收集的mathematica壁纸和图标
date: 2022-01-30
tags: 
- mathematica
---
分享一些wolfram壁纸，Logo以及复刻Logo的程序。
<!--more-->
## wolfram壁纸
下面分享几张收藏的wolfram壁纸：
![wolfram alpha壁纸][1]
![wolfram language壁纸][2]
![wolfram 壁纸][3]
## wolfram小图标
分享一些wolfram的小图标，可以用来制作wolfram手机主题。
之前对利用wolfram图标制作手机主题热衷了一段时间，但是制作的手机主题需要通过魔秀桌面来完成，个人能力还不足以开发一个真正的wolfram主题。其次，网上找到的图标质量参差不齐，wolfram的图标太少，用来替代app图标不直观。因此，后来就没有再进行完善了。。。。。。＞﹏＜\
![a.png][4]
![a1.png][5]
![a2.png][6]
![a3.png][7]
![could.png][8]
![e.png][9]
![engine.png][10]
![enterprise mma 1.png][11]
![enterprise mma.jpg][12]
![mma .png][13]
![notebookedition.png][14]
![player.png][15]
![q.png][16]
![script.jpg][17]
![systemmodeler.png][18]
![wolf 1.png][19]
![wolf 2.png][20]
![wolfram 00.png][21]
![wolfram 3D.png][22]
![wolfram an.png][23]
![wolfram appliance.png][24]
![wolfram mma12.png][25]
![wolfram one.png][26]
![wolfram wolf.png][27]
制作的wolfram手机主题太丑了，ヽ（≧□≦）ノ连我自己也看不下去。。。。。。
![主题1][28]
![主题2][29]
![主题3][30]
把图标的背景去除用的是mathematica的**RemoveBackground**命令，**注意**需要导出png格式。
## mathematica Logo复刻
对于mma的logo，还可以进行复刻：
```mathematica
 Clear["`*"];
    w[col_, r_] := 
      Module[{p = 
         Riffle[CirclePoints[{0.7*r, 0}, 10], 
          CirclePoints[{r, (2*Pi)/20}, 10]]},
       {col, FilledCurve@Line[p~Join~{p[[1]]}]}];
    n[col_, r_, a_] := 
     Module[{p = 
        Riffle[CirclePoints[{0.2*a*r, Pi/10}, 5], 
         CirclePoints[{0.8*r, (3 Pi)/10}, 5]]}, 
      p = p~Join~{p[[1]], p[[2]]}; 
      {col, FilledCurve@
        Table[BezierCurve[p[[2 i ;; 2 i + 2]]], {i, 1, 5}]}]
    Manipulate[
     Graphics[{w[Red, 1.05*r], 
        n @@@ ({{White, Red, White, Red}, {1*r, 0.73*r, 0.5*r, 
             0.3*r}, {1*r, 1.4*r, 1.7*r, 1.8*r}} // Transpose)} // 
       Flatten], {r, 0.8, 1.5}]
```

效果如下：
![mmalogo复刻][31]
内部图形的弯曲程度可以进行调节。

  [1]: https://s2.loli.net/2022/01/30/JVX8bNg3Q4s9Lm2.jpg
  [2]: https://s2.loli.net/2022/01/30/mLsNdDrTf54Wqyn.jpg
  [3]: https://s2.loli.net/2022/01/30/YtOWxdopXABae7n.jpg
  [4]: 收集的mathematica壁纸和图标/1958461828.png
  [5]: 收集的mathematica壁纸和图标/403647967.png
  [6]: 收集的mathematica壁纸和图标/1975973733.png
  [7]: 收集的mathematica壁纸和图标/1280064819.png
  [8]: 收集的mathematica壁纸和图标/110381179.png
  [9]: 收集的mathematica壁纸和图标/2423276829.png
  [10]: 收集的mathematica壁纸和图标/990303910.png
  [11]: 收集的mathematica壁纸和图标/310498496.png
  [12]: 收集的mathematica壁纸和图标/1786598268.jpg
  [13]: 收集的mathematica壁纸和图标/3019568501.png
  [14]: 收集的mathematica壁纸和图标/3223737401.png
  [15]: 收集的mathematica壁纸和图标/846308965.png
  [16]: 收集的mathematica壁纸和图标/3030613776.png
  [17]: 收集的mathematica壁纸和图标/3356141.jpg
  [18]: 收集的mathematica壁纸和图标/455000720.png
  [19]: 收集的mathematica壁纸和图标/4150046662.png
  [20]: 收集的mathematica壁纸和图标/868427920.png
  [21]: 收集的mathematica壁纸和图标/1223950672.png
  [22]: 收集的mathematica壁纸和图标/2663385143.png
  [23]: 收集的mathematica壁纸和图标/3123091514.png
  [24]: 收集的mathematica壁纸和图标/549183974.png
  [25]: 收集的mathematica壁纸和图标/987733225.png
  [26]: 收集的mathematica壁纸和图标/76138743.png
  [27]: 收集的mathematica壁纸和图标/209510529.png
  [28]: https://pic3.zhimg.com/50/v2-e02f84a4315042788bc6aea9308cfaba_r.jpg
  [29]: https://pic3.zhimg.com/50/v2-ee051d4f5ad525e0345b5d6dc619173e_r.jpg
  [30]: https://pic2.zhimg.com/50/v2-72b4116e24d7988e5bd8b62e422f52da_r.jpg
  [31]: https://s2.loli.net/2022/01/30/ediznXUjwbf1JZs.png