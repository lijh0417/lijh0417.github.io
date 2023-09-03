---
title: n维球以及n维正n+1面体的体积与表面积
date: 2022-03-18 12:33
tags: 
- 数学
---
**一个递归方法的应用:**

**求** ![\int x^m e^xdx](https://www.zhihu.com/equation?tex=%5Cint+x%5Em+e%5Exdx)
<!--more-->

![\int{x^m *e^xdx}=x^m e^x-m\int x^{m-1} e^xdx](https://www.zhihu.com/equation?tex=%5Cint%7Bx%5Em+%2Ae%5Exdx%7D%3Dx%5Em+e%5Ex-m%5Cint+x%5E%7Bm-1%7D+e%5Exdx)

递归表达式为: ![F_m=x^m e^x-mF_{m-1}](https://www.zhihu.com/equation?tex=F_m%3Dx%5Em+e%5Ex-mF_%7Bm-1%7D)

```mathematica
Simplify@RSolve[{f[n] == x^n*Exp[x] - n*f[n - 1], 
    f[1] == (x - 1) Exp[x]}, f[n], n] // TraditionalForm
```



![F_n= (-1)^{n+1} (-x)^{-n} \left((-1)^{n+1} x^n \text{Gamma2}(n+1,-x)  +\Gamma (n+1) \left((-x)^n \text{Gamma2}(2,-x)\\+(-1)^n x^n+ (x-1) e^x (-x)^n-(-x)^n\right)\right)](https://www.zhihu.com/equation?tex=F_n%3D+%28-1%29%5E%7Bn%2B1%7D+%28-x%29%5E%7B-n%7D+%5Cleft%28%28-1%29%5E%7Bn%2B1%7D+x%5En+%5Ctext%7BGamma2%7D%28n%2B1%2C-x%29++%2B%5CGamma+%28n%2B1%29+%5Cleft%28%28-x%29%5En+%5Ctext%7BGamma2%7D%282%2C-x%29%5C%5C%2B%28-1%29%5En+x%5En%2B+%28x-1%29+e%5Ex+%28-x%29%5En-%28-x%29%5En%5Cright%29%5Cright%29)

### **对球和正n+1面体:**

### **1 球:**

![V_n(r)=\int_{-r}^{r} V_{n-1}(\sqrt{r^2-y^2})dy ](https://www.zhihu.com/equation?tex=V_n%28r%29%3D%5Cint_%7B-r%7D%5E%7Br%7D+V_%7Bn-1%7D%28%5Csqrt%7Br%5E2-y%5E2%7D%29dy+)

换元后

![A_n=A_{n-1}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}cos^n\theta d\theta](https://www.zhihu.com/equation?tex=A_n%3DA_%7Bn-1%7D%5Cint_%7B-%5Cfrac%7B%5Cpi%7D%7B2%7D%7D%5E%7B%5Cfrac%7B%5Cpi%7D%7B2%7D%7Dcos%5En%5Ctheta+d%5Ctheta)

```mathematica
Clear["`*"];
g[n] = Integrate[Cos[x]^n, {x, -Pi/2, Pi/2}, Assumptions -> n > 0];
RSolve[{a[n] == a[n - 1]*g[n], a[1] == 2}, a[n], n] // 
  TraditionalForm ;
f[n_] := (2 \[Pi]^(n/2))/(n Gamma[n/2]);
ListPlot[Table[(2 \[Pi]^(n/2))/(n Gamma[n/2]), {n, 0, 20}]];
ListPlot[Table[f[x], {x, 0, 20, 0.02}], PlotTheme -> "Detailed"]
Max[Table[f[x], {x, 5, 6, 0.0001}]];

ListPlot[Table[(f[x + 0.0001] - f[x])/0.0001, {x, 5, 6, 0.0001}]];
FindRoot[D[f[x], x], {x, 1, 10}];
L[n_] = Simplify[n*f[n]];
ListPlot[Table[L[n], {n, 0, 20, 0.02}], PlotTheme -> "Detailed"];
FindRoot[D[L[x], x], {x, 1, 10}];
Integrate[f[2*x], {x, 0, Infinity}, 
 Assumptions -> x \[Element] Integer]
Sum[f[x], {x, 0, Infinity}]
Sum[L[2*n + 1], {n, 0, Infinity}]
```

**体积系数:**

![\frac{2 \pi ^{n/2}}{n \Gamma \left(\frac{n}{2}\right)}](https://www.zhihu.com/equation?tex=%5Cfrac%7B2+%5Cpi+%5E%7Bn%2F2%7D%7D%7Bn+%5CGamma+%5Cleft%28%5Cfrac%7Bn%7D%7B2%7D%5Cright%29%7D)

**表面积系数:**

![L_n=\frac{2 \pi ^{n/2}}{\Gamma \left(\frac{n}{2}\right)}](https://www.zhihu.com/equation?tex=L_n%3D%5Cfrac%7B2+%5Cpi+%5E%7Bn%2F2%7D%7D%7B%5CGamma+%5Cleft%28%5Cfrac%7Bn%7D%7B2%7D%5Cright%29%7D)

**绘图:**

![img](https://pic1.zhimg.com/v2-eeb3d3f5d2be96fe8258c31f1ab053b4_r.jpg)

![img](https://pic3.zhimg.com/v2-2113b4b03c0baba628e5a954dadd34a6_r.jpg)

n维球在**n=5.257**是体积系数有最大值,**5.27777**

在**n=7.257**时表面积系数有最大值,**33.1612**

为啥呢?

我也不知道了.

体积系数和表面积系数是收敛的:

求和有:

**体积系数和：** ![e^{\pi } \text{erf}\left(\sqrt{\pi }\right)+e^{\pi }](https://www.zhihu.com/equation?tex=e%5E%7B%5Cpi+%7D+%5Ctext%7Berf%7D%5Cleft%28%5Csqrt%7B%5Cpi+%7D%5Cright%29%2Be%5E%7B%5Cpi+%7D)

![erf(x)](https://www.zhihu.com/equation?tex=erf%28x%29) 为误差函数。 ![\text{erf}(z)=\frac{2}{\sqrt{\pi }}\int _0^zd t e^{-t^2}](https://www.zhihu.com/equation?tex=%5Ctext%7Berf%7D%28z%29%3D%5Cfrac%7B2%7D%7B%5Csqrt%7B%5Cpi+%7D%7D%5Cint+_0%5Ezd+t+e%5E%7B-t%5E2%7D)

**偶数项和:** ![e^{\pi }](https://www.zhihu.com/equation?tex=e%5E%7B%5Cpi+%7D)

**奇数项和：** ![e^{\pi } \text{erf}\left(\sqrt{\pi }\right)](https://www.zhihu.com/equation?tex=e%5E%7B%5Cpi+%7D+%5Ctext%7Berf%7D%5Cleft%28%5Csqrt%7B%5Cpi+%7D%5Cright%29)

**表面积系数和：** ![2 \left(e^{\pi } \pi  \text{erf}\left(\sqrt{\pi }\right)+e^{\pi } \pi +1\right)](https://www.zhihu.com/equation?tex=2+%5Cleft%28e%5E%7B%5Cpi+%7D+%5Cpi++%5Ctext%7Berf%7D%5Cleft%28%5Csqrt%7B%5Cpi+%7D%5Cright%29%2Be%5E%7B%5Cpi+%7D+%5Cpi+%2B1%5Cright%29)

**偶数项和：** ![2 e^{\pi } \pi](https://www.zhihu.com/equation?tex=2+e%5E%7B%5Cpi+%7D+%5Cpi)

**奇数项和：** ![2 \left(e^{\pi } \pi  \text{erf}\left(\sqrt{\pi }\right)+1\right)](https://www.zhihu.com/equation?tex=2+%5Cleft%28e%5E%7B%5Cpi+%7D+%5Cpi++%5Ctext%7Berf%7D%5Cleft%28%5Csqrt%7B%5Cpi+%7D%5Cright%29%2B1%5Cright%29)

### **2 正n+1面体:**

**高系数递推公式:**

![H_n=\sqrt{1-(\frac{n-1}{n}H_{n-1})^2}](https://www.zhihu.com/equation?tex=H_n%3D%5Csqrt%7B1-%28%5Cfrac%7Bn-1%7D%7Bn%7DH_%7Bn-1%7D%29%5E2%7D)

```mathematica
H_n=\sqrt{1-(\frac{n-1}{n}H_{n-1})^2}
```

**体积系数的递推公式：**

![A_n=\frac{1}{n}A_{n-1}H_n](https://www.zhihu.com/equation?tex=A_n%3D%5Cfrac%7B1%7D%7Bn%7DA_%7Bn-1%7DH_n)

```mathematica
a[n_] := -((I^n Sqrt[(-1)^n (n + n^2)])/(Sqrt[2] n));
RSolve[{b[n] == 1/n*a[n]*b[n - 1], b[2] == Sqrt[3]/4}, b[n], n];
```

**高系数：**

![H_n=-\frac{i^n \sqrt{(-1)^n \left(n^2+n\right)}}{\sqrt{2} n}](https://www.zhihu.com/equation?tex=H_n%3D-%5Cfrac%7Bi%5En+%5Csqrt%7B%28-1%29%5En+%5Cleft%28n%5E2%2Bn%5Cright%29%7D%7D%7B%5Csqrt%7B2%7D+n%7D)

**体积系数:**

![A_n=\frac{(-1)^{\frac{1}{4} n (n+1)} (-i)^{2 n} 2^{\frac{1}{2}-\frac{n}{2}} \sqrt{i^{n (n+1)} (2)_{n-1} (3)_{n-1}}}{\left((1)_n\right){}^2}](https://www.zhihu.com/equation?tex=A_n%3D%5Cfrac%7B%28-1%29%5E%7B%5Cfrac%7B1%7D%7B4%7D+n+%28n%2B1%29%7D+%28-i%29%5E%7B2+n%7D+2%5E%7B%5Cfrac%7B1%7D%7B2%7D-%5Cfrac%7Bn%7D%7B2%7D%7D+%5Csqrt%7Bi%5E%7Bn+%28n%2B1%29%7D+%282%29_%7Bn-1%7D+%283%29_%7Bn-1%7D%7D%7D%7B%5Cleft%28%281%29_n%5Cright%29%7B%7D%5E2%7D)

**表面积系数:**

![L_n=\frac{(-1)^{\frac{1}{4} n (n+1)} (-i)^{2 n} 2^{\frac{1}{2}-\frac{n}{2}} \sqrt{i^{n (n+1)} (2)_{n-1} (3)_{n-1}}}{\left((1)_n\right){}^2}](https://www.zhihu.com/equation?tex=L_n%3D%5Cfrac%7B%28-1%29%5E%7B%5Cfrac%7B1%7D%7B4%7D+n+%28n%2B1%29%7D+%28-i%29%5E%7B2+n%7D+2%5E%7B%5Cfrac%7B1%7D%7B2%7D-%5Cfrac%7Bn%7D%7B2%7D%7D+%5Csqrt%7Bi%5E%7Bn+%28n%2B1%29%7D+%282%29_%7Bn-1%7D+%283%29_%7Bn-1%7D%7D%7D%7B%5Cleft%28%281%29_n%5Cright%29%7B%7D%5E2%7D)

为什么会有复数?

不知道了.可以画幅频曲线，相频曲线？？

**注：**以前看过网上有一个日本高考题，证明 ![e^\pi>21](https://www.zhihu.com/equation?tex=e%5E%5Cpi%3E21) ，使用的线性化方法。

可以出一个题：**证明偶数维球体积系数之和大于21.**



