---
title: Kirchhoff弹性杆理论的简化形式
date: 2023-02-28 09:27:18
mathjax: true
tags:
- 数学
- 力学
- Elastica Rod
---
**Kirchhoff弹性杆如何退化到一些经典理论？**
<!--more-->
**均假设为恒定圆截面弹性杆**
## 静态弹性杆   
$
\begin{array}{c}
\frac{\partial \mathbf{F}}{\partial s}+\boldsymbol{q}=0 \\  
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \boldsymbol{r}}{\partial s} \times \mathbf{F}+\mathbf{m}=0 \\  
\dot{\boldsymbol{r}}=0 \\  
\mathbf{d}_{1}=\frac{\partial u}{\partial s} \\  
\boldsymbol{\Gamma}=\mathbf{R}_{s} \mathbf{R}^{\mathbf{T}} \\  
\boldsymbol{\Omega}=0 \\  
\mathbf{M}=\mathrm{EI}(\boldsymbol{\Gamma})
\end{array}
$

上式化简为：   
$
\mathrm{F}_s+\left( \mathrm{FR}_{\mathrm{s}}+\mathrm{q} \right) \mathrm{R}^{\mathrm{T}}=0
$
$
\mathrm{M}_s+\left( \mathrm{MR}_{\mathrm{s}}+\mathrm{m} \right) \mathrm{R}^{\mathrm{T}}+\mathrm{F}\Lambda =0
$
$
\Lambda =\left( \begin{matrix}
	0&		0&		0\\
	0&		0&		-1\\
	0&		1&		0\\
\end{matrix} \right) 
$
$
\Gamma =\left( \begin{matrix}
	0&		\omega _3&		-\omega _2\\
	-\omega _3&		0&		\omega _1\\
	\omega _2&		-\omega _1&		0\\
\end{matrix} \right) =\mathrm{R_s R}^{\mathrm{T}}
$
$
\mathrm{M}=\left( \begin{matrix}
	\mathrm{GI}\omega _1&		-\mathrm{EI}\omega _2&		\mathrm{EI}\\
\end{matrix}\omega _3 \right)
$
分两种情况讨论：

① 转动采用欧拉角形式表示（3-2-3转动）

转动矩阵为：
$
\mathrm{R}=\left( \begin{matrix}
	c_{\alpha}c_{\beta}c_{\gamma}-s_{\alpha}s_{\gamma}&		-c_{\alpha}c_{\beta}s_{\gamma}-c_{\gamma}s_{\alpha}&		c_{\alpha}s_{\beta}\\
	c_{\beta}c_{\gamma}s_{\alpha}+c_{\alpha}s_{\gamma}&		c_{\alpha}c_{\gamma}-c_{\beta}s_{\alpha}s_{\gamma}&		s_{\alpha}s_{\beta}\\
	-c_{\gamma}s_{\beta}&		s_{\beta}s_{\gamma}&		c_{\beta}\\
\end{matrix} \right)
$
Frenet矩阵为：
$
\Gamma =\left( \begin{matrix}
	0&		-\alpha'(s)-\cos\mathrm{(}\beta (s))\gamma'(s)&		\cos\mathrm{(}\alpha (s))\beta'(s)+\sin\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\gamma'(s)\\
	\alpha'(s)+\cos\mathrm{(}\beta (s))\gamma'(s)&		0&		\sin\mathrm{(}\alpha (s))\beta'(s)-\cos\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\gamma'(s)\\
	-\cos\mathrm{(}\alpha (s))\beta'(s)-\sin\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\gamma'(s)&		\cos\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\gamma'(s)-\sin\mathrm{(}\alpha (s))\beta'(s)&		0\\
\end{matrix} \right)=\left( \begin{matrix}
	0&		\omega _3&		-\omega _2\\
	-\omega _3&		0&		\omega _1\\
	\omega _2&		-\omega _1&		0\\
\end{matrix} \right)
$
(2) (3) (4)结合表达为分量形式可以得到：
$
\left( \begin{array}{c}
	\mathrm{F}_1\left( \mathrm{s} \right)\\
	\mathrm{F}_2\left( \mathrm{s} \right)\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
\end{array} \right)'-\left( \begin{matrix}
	0&		\omega _3\left( s \right)&		-\omega _2\left( s \right)\\
	-\omega _3\left( s \right)&		0&		\omega _1\left( s \right)\\
	\omega _2\left( s \right)&		-\omega _1\left( s \right)&		0\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{F}_1\left( \mathrm{s} \right)\\
	\mathrm{F}_2\left( \mathrm{s} \right)\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
\end{array} \right) +\left( \begin{matrix}
	\cos\mathrm{(}\alpha (s))\cos\mathrm{(}\beta (s))\cos\mathrm{(}\gamma (s))-\sin\mathrm{(}\alpha (s))\sin\mathrm{(}\gamma (s))&		-\sin\mathrm{(}\alpha (s))\cos\mathrm{(}\gamma (s))-\cos\mathrm{(}\alpha (s))\cos\mathrm{(}\beta (s))\sin\mathrm{(}\gamma (s))&		\cos\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\\
	\sin\mathrm{(}\alpha (s))\cos\mathrm{(}\beta (s))\cos\mathrm{(}\gamma (s))+\cos\mathrm{(}\alpha (s))\sin\mathrm{(}\gamma (s))&		\cos\mathrm{(}\alpha (s))\cos\mathrm{(}\gamma (s))-\sin\mathrm{(}\alpha (s))\cos\mathrm{(}\beta (s))\sin\mathrm{(}\gamma (s))&		\sin\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\\
	-\sin\mathrm{(}\beta (s))\cos\mathrm{(}\gamma (s))&		\sin\mathrm{(}\beta (s))\sin\mathrm{(}\gamma (s))&		\cos\mathrm{(}\beta (s)\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{q}_x\left( \mathrm{s} \right)\\
	\mathrm{q}_y\left( \mathrm{s} \right)\\
	\mathrm{q}_z\left( \mathrm{s} \right)\\
\end{array} \right) =0
$
$
\left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right)'-\left( \begin{matrix}
	0&		\omega _3\left( s \right)&		-\omega _2\left( s \right)\\
	-\omega _3\left( s \right)&		0&		\omega _1\left( s \right)\\
	\omega _2\left( s \right)&		-\omega _1\left( s \right)&		0\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right) +\left( \begin{matrix}
	\cos\mathrm{(}\alpha (s))\cos\mathrm{(}\beta (s))\cos\mathrm{(}\gamma (s))-\sin\mathrm{(}\alpha (s))\sin\mathrm{(}\gamma (s))&		-\sin\mathrm{(}\alpha (s))\cos\mathrm{(}\gamma (s))-\cos\mathrm{(}\alpha (s))\cos\mathrm{(}\beta (s))\sin\mathrm{(}\gamma (s))&		\cos\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\\
	\sin\mathrm{(}\alpha (s))\cos\mathrm{(}\beta (s))\cos\mathrm{(}\gamma (s))+\cos\mathrm{(}\alpha (s))\sin\mathrm{(}\gamma (s))&		\cos\mathrm{(}\alpha (s))\cos\mathrm{(}\gamma (s))-\sin\mathrm{(}\alpha (s))\cos\mathrm{(}\beta (s))\sin\mathrm{(}\gamma (s))&		\sin\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\\
	-\sin\mathrm{(}\beta (s))\cos\mathrm{(}\gamma (s))&		\sin\mathrm{(}\beta (s))\sin\mathrm{(}\gamma (s))&		\cos\mathrm{(}\beta (s)\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{m}_x\left( \mathrm{s} \right)\\
	\mathrm{m}_y\left( \mathrm{s} \right)\\
	\mathrm{m}_z\left( \mathrm{s} \right)\\
\end{array} \right) +\left( \begin{array}{c}
	0\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
	-\mathrm{F}_2\left( \mathrm{s} \right)\\
\end{array} \right) =0
$
$
\left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right) =\left( \begin{matrix}
	\mathrm{GI}&		0&		0\\
	0&		-\mathrm{EI}&		0\\
	0&		0&		\mathrm{EI}\\
\end{matrix} \right) \left( \begin{array}{c}
	\omega _1\left( \mathrm{s} \right)\\
	\omega _2\left( \mathrm{s} \right)\\
	\omega _3\left( \mathrm{s} \right)\\
\end{array} \right)\\
\left( \begin{array}{c}
	\omega _1\left( \mathrm{s} \right)\\
	\omega _2\left( \mathrm{s} \right)\\
	\omega _3\left( \mathrm{s} \right)\\
\end{array} \right) =\left( \begin{array}{c}
	\sin\mathrm{(}\alpha (s))\beta'(s)-\cos\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\gamma'(s)\\
	-\cos\mathrm{(}\alpha (s))\beta'(s)-\sin\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\gamma'(s)\\
	-\alpha'(s)-\cos\mathrm{(}\beta (s))\gamma'(s)\\
\end{array} \right)
$
共有12组方程，12个变量($ \omega_i;\rm M_i;\rm F_i;\alpha;\beta;\gamma $)。上述方程组是封闭的。

② 转动采用四元数形式表示

转动矩阵为：
$
\mathrm{R}=\left( \begin{matrix}
	-2q_2(s)^2-2q_3(s)^2+1&		2(q_0(s)q_3(s)+q_1(s)q_2(s))&		2q_1(s)q_3(s)-2q_0(s)q_2(s)\\
	2q_1(s)q_2(s)-2q_0(s)q_3(s)&		-2q_1(s)^2-2q_3(s)^2+1&		2(q_0(s)q_1(s)+q_2(s)q_3(s))\\
	2(q_0(s)q_2(s)+q_1(s)q_3(s))&		2q_2(s)q_3(s)-2q_0(s)q_1(s)&		-2q_1(s)^2-2q_2(s)^2+1\\
\end{matrix} \right) 
$
Frenet矩阵为：
$
\Gamma=\left( \begin{matrix}
	0&		2\left( -\mathrm{q}_3(s)\mathrm{q}_0'(s)+\mathrm{q}_0(s)\mathrm{q}_3'(s)+\mathrm{q}_2(s)\mathrm{q}_1'(s)-\mathrm{q}_1(s)\mathrm{q}_2'(s) \right)&		2\left( \mathrm{q}_2(s)\mathrm{q}_0'(s)-\mathrm{q}_0(s)\mathrm{q}_2'(s)+\mathrm{q}_3(s)\mathrm{q}_1'(s)-\mathrm{q}_1(s)\mathrm{q}_3'(s) \right)\\
	2\left( \mathrm{q}_3(s)\mathrm{q}_0'(s)-\mathrm{q}_0(s)\mathrm{q}_3'(s)-\mathrm{q}_2(s)\mathrm{q}_1'(s)+\mathrm{q}_1(s)\mathrm{q}_2'(s) \right)&		0&		2\left( -\mathrm{q}_1(s)\mathrm{q}_0'(s)+\mathrm{q}_0(s)\mathrm{q}_1'(s)+\mathrm{q}_3(s)\mathrm{q}_2'(s)-\mathrm{q}_2(s)\mathrm{q}_3'(s) \right)\\
	2\left( -\mathrm{q}_2(s)\mathrm{q}_0'(s)+\mathrm{q}_0(s)\mathrm{q}_2'(s)-\mathrm{q}_3(s)\mathrm{q}_1'(s)+\mathrm{q}_1(s)\mathrm{q}_3'(s) \right)&		2\left( \mathrm{q}_1(s)\mathrm{q}_0'(s)-\mathrm{q}_0(s)\mathrm{q}_1'(s)-\mathrm{q}_3(s)\mathrm{q}_2'(s)+\mathrm{q}_2(s)\mathrm{q}_3'(s) \right)&		0\\
\end{matrix} \right)=\left( \begin{matrix}
	0&		\omega _3&		-\omega _2\\
	-\omega _3&		0&		\omega _1\\
	\omega _2&		-\omega _1&		0\\
\end{matrix} \right)
$
加上约束：
$
\text{q}_0(s)^2+\text{q}_1(s)^2+\text{q}_2(s)^2+\text{q}_3(s)^2=1
$

(2) (6) (7) (8)结合表达为分量形式可以得到：
$
\left( \begin{array}{c}
	\mathrm{F}_1\left( \mathrm{s} \right)\\
	\mathrm{F}_2\left( \mathrm{s} \right)\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
\end{array} \right)'-\left( \begin{matrix}
	0&		\omega _3\left( s \right)&		-\omega _2\left( s \right)\\
	-\omega _3\left( s \right)&		0&		\omega _1\left( s \right)\\
	\omega _2\left( s \right)&		-\omega _1\left( s \right)&		0\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{F}_1\left( \mathrm{s} \right)\\
	\mathrm{F}_2\left( \mathrm{s} \right)\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
\end{array} \right) +\left( \begin{matrix}
	-2q_2(s)^2-2q_3(s)^2+1&		2(q_0(s)q_3(s)+q_1(s)q_2(s))&		2q_1(s)q_3(s)-2q_0(s)q_2(s)\\
	2q_1(s)q_2(s)-2q_0(s)q_3(s)&		-2q_1(s)^2-2q_3(s)^2+1&		2(q_0(s)q_1(s)+q_2(s)q_3(s))\\
	2(q_0(s)q_2(s)+q_1(s)q_3(s))&		2q_2(s)q_3(s)-2q_0(s)q_1(s)&		-2q_1(s)^2-2q_2(s)^2+1\\
\end{matrix} \right) \left( \begin{array}{c}
	q_x\left( \mathrm{s} \right)\\
	q_y\left( \mathrm{s} \right)\\
	q_z\left( \mathrm{s} \right)\\
\end{array} \right) =0
$
$
\left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right)'-\left( \begin{matrix}
	0&		\omega _3\left( s \right)&		-\omega _2\left( s \right)\\
	-\omega _3\left( s \right)&		0&		\omega _1\left( s \right)\\
	\omega _2\left( s \right)&		-\omega _1\left( s \right)&		0\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right) +\left( \begin{matrix}
	-2q_2(s)^2-2q_3(s)^2+1&		2(q_0(s)q_3(s)+q_1(s)q_2(s))&		2q_1(s)q_3(s)-2q_0(s)q_2(s)\\
	2q_1(s)q_2(s)-2q_0(s)q_3(s)&		-2q_1(s)^2-2q_3(s)^2+1&		2(q_0(s)q_1(s)+q_2(s)q_3(s))\\
	2(q_0(s)q_2(s)+q_1(s)q_3(s))&		2q_2(s)q_3(s)-2q_0(s)q_1(s)&		-2q_1(s)^2-2q_2(s)^2+1\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{m}_x\left( \mathrm{s} \right)\\
	\mathrm{m}_y\left( \mathrm{s} \right)\\
	\mathrm{m}_z\left( \mathrm{s} \right)\\
\end{array} \right) +\left( \begin{array}{c}
	0\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
	-\mathrm{F}_2\left( \mathrm{s} \right)\\
\end{array} \right) =0
$
$
\left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right) =\left( \begin{matrix}
	\mathrm{GI}&		0&		0\\
	0&		-\mathrm{EI}&		0\\
	0&		0&		\mathrm{EI}\\
\end{matrix} \right) \left( \begin{array}{c}
	\omega _1\left( \mathrm{s} \right)\\
	\omega _2\left( \mathrm{s} \right)\\
	\omega _3\left( \mathrm{s} \right)\\
\end{array} \right) 
$
$
\left( \begin{array}{c}
	\omega _1\left( \mathrm{s} \right)\\
	\omega _2\left( \mathrm{s} \right)\\
	\omega _3\left( \mathrm{s} \right)\\
\end{array} \right) =\left( \begin{array}{c}
	2\left( -q_1(s)q_0'(s)+q_0(s)q_1'(s)+q_3(s)q_2'(s)-q_2(s)q_3'(s) \right)\\
	2\left( -q_2(s)q_0'(s)+q_0(s)q_2'(s)-q_3(s)q_1'(s)+q_1(s)q_3'(s) \right)\\
	2\left( -q_3(s)q_0'(s)+q_0(s)q_3'(s)+q_2(s)q_1'(s)-q_1(s)q_2'(s) \right)\\
\end{array} \right)
$
转动表达形式选取影响的只是(5)式，在存在载荷时会体现出与欧拉角求解的差异，外部载荷为零时，由于是局部标架与整体标架是解耦的。

### 简化讨论

若外载荷为0，欧拉角从上述方程中解耦出来。得到：
$
\left( \begin{array}{c}
	\mathrm{F}_1\left( \mathrm{s} \right)\\
	\mathrm{F}_2\left( \mathrm{s} \right)\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
\end{array} \right)'-\left( \begin{matrix}
	0&		\omega _3\left( s \right)&		-\omega _2\left( s \right)\\
	-\omega _3\left( s \right)&		0&		\omega _1\left( s \right)\\
	\omega _2\left( s \right)&		-\omega _1\left( s \right)&		0\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{F}_1\left( \mathrm{s} \right)\\
	\mathrm{F}_2\left( \mathrm{s} \right)\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
\end{array} \right) =0
\\
\left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right)'-\left( \begin{matrix}
	0&		\omega _3\left( s \right)&		-\omega _2\left( s \right)\\
	-\omega _3\left( s \right)&		0&		\omega _1\left( s \right)\\
	\omega _2\left( s \right)&		-\omega _1\left( s \right)&		0\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right) +\left( \begin{array}{c}
	0\\
	\mathrm{F}_3\left( \mathrm{s} \right)\\
	-\mathrm{F}_2\left( \mathrm{s} \right)\\
\end{array} \right) =0
\\
\left( \begin{array}{c}
	\mathrm{M}_1\left( \mathrm{s} \right)\\
	\mathrm{M}_2\left( \mathrm{s} \right)\\
	\mathrm{M}_3\left( \mathrm{s} \right)\\
\end{array} \right) =\left( \begin{matrix}
	\mathrm{GI}&		0&		0\\
	0&		-\mathrm{EI}&		0\\
	0&		0&		\mathrm{EI}\\
\end{matrix} \right) \left( \begin{array}{c}
	\omega _1\left( \mathrm{s} \right)\\
	\omega _2\left( \mathrm{s} \right)\\
	\omega _3\left( \mathrm{s} \right)\\
\end{array} \right) 
\\
\left( \begin{array}{c}
	\omega _1\left( \mathrm{s} \right)\\
	\omega _2\left( \mathrm{s} \right)\\
	\omega _3\left( \mathrm{s} \right)\\
\end{array} \right) =\left( \begin{array}{c}
	\sin\mathrm{(}\alpha (s))\beta'(s)-\cos\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\gamma'(s)\\
	-\cos\mathrm{(}\alpha (s))\beta'(s)-\sin\mathrm{(}\alpha (s))\sin\mathrm{(}\beta (s))\gamma'(s)\\
	-\alpha'(s)-\cos\mathrm{(}\beta (s))\gamma'(s)\\
\end{array} \right) =\left( \begin{array}{c}
	2\left( -\mathrm{q}_1(s)\mathrm{q}_0'(s)+\mathrm{q}_0(s)\mathrm{q}_1'(s)+\mathrm{q}_3(s)\mathrm{q}_2'(s)-\mathrm{q}_2(s)\mathrm{q}_3'(s) \right)\\
	2\left( -\mathrm{q}_2(s)\mathrm{q}_0'(s)+\mathrm{q}_0(s)\mathrm{q}_2'(s)-\mathrm{q}_3(s)\mathrm{q}_1'(s)+\mathrm{q}_1(s)\mathrm{q}_3'(s) \right)\\
	2\left( -\mathrm{q}_3(s)\mathrm{q}_0'(s)+\mathrm{q}_0(s)\mathrm{q}_3'(s)+\mathrm{q}_2(s)\mathrm{q}_1'(s)-\mathrm{q}_1(s)\mathrm{q}_2'(s) \right)\\
\end{array} \right) 
$
化简为：

$
\begin{cases}
	\mathrm{EI}\left( \left( \omega _1\left( {\omega _3}^2-{\omega _2}^2 \right) \right)'+\omega _3(s){\omega _2}^{''}(s)-2\omega _1(s)^2\omega _2(s)\omega _3(s)+\omega _2(s){\omega _3}^{''}(s) \right) -\mathrm{GI}\left( \left( \omega _2(s)^2+\omega _3(s)^2 \right) \omega _1'(s)+\frac{\omega _1(s)}{2}\left( \omega _2(s)^2+\omega _3(s)^2 \right)' \right) =0\\
	\mathrm{EI}\left( \frac{3\omega _1'(s)\omega _3'(s)}{\omega _2(s)}+\omega _3(s)\left( \frac{\omega _1'(s)}{\omega _2(s)} \right)'+2\omega _1(s)\left( \frac{\omega _3'(s)}{\omega _2(s)} \right)'-\left( \omega _1(s)^2+\frac{1}{2}\left( \omega _3(s)^2-\omega _2(s)^2 \right) \right)'+2\omega _1(s)\omega _2(s)\omega _3(s)+\left( \frac{\omega _2''(s)}{\omega _2(s)} \right)' \right) +\mathrm{GI}\left( -\omega _3(s)\left( \frac{\omega _1'(s)}{\omega _2(s)} \right)'-\omega _3'(s)\left( \frac{\omega _1(s)}{\omega _2(s)} \right)'-\frac{\left( \omega _1(s)\omega _3'(s) \right)'}{\omega _2(s)}-\left( \omega _1(s)^2 \right)' \right) =0\\
	\mathrm{EI}\left( \frac{3\omega _1'(s)\omega _2'(s)}{\omega _3(s)}-\omega _2(s)\left( \frac{\omega _1'(s)}{\omega _3(s)} \right)'-2\omega _1(s)\left( \frac{\omega _2'(s)}{\omega _3(s)} \right)'+\left( \omega _1(s)^2+\frac{1}{2}\left( \omega _2(s)^2-\omega _3(s)^2 \right) \right)'+2\omega _1(s)\omega _2(s)\omega _3(s)-\left( \frac{\omega _3''(s)}{\omega _3(s)} \right)' \right) +\mathrm{GI}\left( \omega _1(s)\left( \frac{\omega _2'(s)}{\omega _3(s)} \right)'+\omega _1'(s)\left( \frac{\omega _2(s)}{\omega _3(s)} \right)'+\frac{\left( \omega _2(s)\omega _1'(s) \right)'}{\omega _3(s)}-\left( \omega _1(s)^2 \right)' \right) =0\\
\end{cases}
$
即使对于无外载荷的Kirchhoff弹性杆，求得的控制方程已经足够复杂。现在考虑选取Frenet坐标系，即令$ \omega_3=\kappa;\omega_2=0;\omega_1=\tau$，上式化简为：
$
\begin{cases}
	\frac{\tau'}{\tau}+\frac{\left( 2\mathrm{EI}-\mathrm{GI} \right)}{2\left( \mathrm{EI}-\mathrm{GI} \right)}\frac{\left( \kappa ^2 \right)'}{\kappa ^2}=0\\
	\left( \frac{\kappa''}{\kappa } \right)'+\left( \frac{\mathrm{GI}}{\mathrm{EI}}-1 \right) \left( \tau ^2 \right)'+\frac{1}{2}\left( \kappa ^2 \right)'=0\\
\end{cases}
$
定义$ \frac{\rm EI}{\rm GI}=\nu+1$，$\nu$为泊松比。得到控制方程：
$
\begin{cases}
	\frac{\tau '}{\tau}+\left( 1+\frac{1}{2\nu} \right) \frac{\left( \kappa ^2 \right) '}{\kappa ^2}=0\\
	\left( \frac{\kappa''}{\kappa } \right) '-\frac{\nu}{\nu +1}\left( \tau ^2 \right) '+\frac{1}{2}\left( \kappa ^2 \right) '=0\\
\end{cases}
$
通过(9)积分得到：
$
\begin{cases}
	\tau \kappa ^{2+\frac{1}{\nu}}=\mathrm{c}_0\\
	\kappa''-\frac{\nu}{\nu +1}\tau ^2\kappa +\frac{1}{2}\kappa ^3+\mathrm{c}_1=0\\
\end{cases}
$
求出含扭转无载静态弹性杆的控制方程为：
$
\kappa''+\frac{1}{2}\kappa ^3+\mathrm{c}_1\kappa -\frac{\nu}{\nu +1}{\mathrm{c}_0}^2\frac{1}{\kappa ^{3+\frac{2}{\nu}}}=0
$
可以看出，如果不考虑扭转能，令$ \rm GI\rightarrow0;\nu\rightarrow ∞ $，(11)退化到[弹性线问题与数值求解](https://lijh0417.github.io/2022/11/02/%E5%BC%B9%E6%80%A7%E7%BA%BF%E9%97%AE%E9%A2%98%E4%B8%8E%E6%95%B0%E5%80%BC%E6%B1%82%E8%A7%A3/)中通过能量泛函求出的Euler's Elastica Rod方程。

## 稳态弹性杆（沿绳子运动）
局部标架二阶导表达式为：
$
\ddot{\boldsymbol{d}}=\left( v_t\Gamma +v^2\left( \Gamma _s+\Gamma \Gamma \right) \right) \boldsymbol{d}\\ 
$
$  
\ddot{r}=r_{ss}v^2+r_sv_t=v_td_1+v^2\left( m_1d_2+m_2d_3 \right)
$
弹性杆方程：
$
\frac{\partial \mathbf{F}}{\partial s}+\boldsymbol{q}=\rho \mathbf{A}\ddot{\boldsymbol{r}}=\rho \mathbf{A}(v_t\rm \boldsymbol d_1+v^2( m_1\rm \boldsymbol d_2+m_2\rm \boldsymbol d_3 ))  
\\   
$
$
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \boldsymbol{r}}{\partial s}\times \mathbf{F}+\mathbf{m}=\rho \left( \mathrm{I}_3\mathbf{d}_2\times \ddot{\boldsymbol{d}}_2+\mathrm{I}_2\mathbf{d}_3\times \ddot{\boldsymbol{d}}_3 \right)\\=\rho I_0\left( \left( 2v^2m'+2mv_t \right) \mathbf{d}_1+\left( -m_2v_t-v^2m_2'+v^2mm_1 \right) \mathbf{d}_2+\left( m_1v_t+v^2m_1'+v^2mm_2 \right) \mathbf{d}_3 \right)   \\   
$
$
\dot{\boldsymbol{r}}=\frac{\partial u}{\partial t}=\frac{\partial u}{\partial s}v=v\rm{\boldsymbol{d_1}}\\   
$
$       
\mathbf{d}_1=\frac{\partial u}{\partial s}\\     
\mathbf{\Gamma }=\mathbf{R}_s\mathbf{R}^{\mathbf{T}}\\   
$
$
\mathbf{\Omega }=v\mathbf{R}_s\mathbf{R}^{\mathbf{T}}=v\boldsymbol{\Gamma}\\
$
$   
\mathbf{M}=\mathrm{EI}(\mathbf{\Gamma })
$


## 二维理论
### 二维静态理论
从静态理论的代码开始简化：
$
\frac{\partial \mathbf{F}}{\partial s}+\boldsymbol{q}=0
\\
$
$
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \boldsymbol{r}}{\partial s}\times \mathbf{F}+\mathbf{m}=0\\
$
$
\dot{\boldsymbol{r}}=0\\
$
$
\mathbf{d}_1=\frac{\partial u}{\partial s}\\
$
$
\mathbf{\Gamma }=\mathbf{R}_s\mathbf{R}^{\mathbf{T}}\\
$
$
\mathbf{\Omega }=0\\
$
$
\mathbf{M}=\mathrm{EI}(\mathbf{\Gamma })
$
简化条件：
$
\mathbf{F}=\mathrm{F}_1\mathbf{d}_1+\mathrm{F}_2\mathbf{d}_2
$
$
\mathbf{M}=\mathrm{M}\mathbf{d}_3
$
$
\tau =0
$
$
\dot{\mathbf{d}}_3=0
$
$
\dot{\mathbf{d}}_1=\kappa \mathbf{d}_2
$
$
\dot{\mathbf{d}}_2=-\kappa \mathbf{d}_1
$
$
\mathrm{M}=\mathrm{EI}\kappa 
$
$
\left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_{_2}\\
\end{array} \right) =\left( \begin{matrix}
	\cos \theta (s)&		-\sin \theta (s)\\
	\sin \theta (s)&		\cos \theta (s)\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathbf{x}\\
	\mathbf{y}\\
\end{array} \right) 
$
$
\left( \begin{matrix}
	0&		\kappa\\
	-\kappa&		0\\
\end{matrix} \right) =\left( \begin{matrix}
	0&		-\theta'(s)\\
	\theta'(s)&		0\\
\end{matrix} \right) 
$
$
\boldsymbol{m}=m\left( \mathrm{s} \right) \mathbf{d}_3
$
$
\boldsymbol{q}=q_x\left( s \right) \boldsymbol{i}+q_y\left( s \right) \boldsymbol{j}=\left( \begin{matrix}
	q_x\left( s \right)&		q_y\left( s \right)\\
\end{matrix} \right) \left( \begin{array}{c}
	\boldsymbol{i}\\
	\boldsymbol{j}\\
\end{array} \right) =\left( \begin{matrix}
	q_x\left( s \right)&		q_y\left( s \right)\\
\end{matrix} \right) \left( \begin{matrix}
	\cos \theta (s)&		\sin \theta (s)\\
	-\sin \theta (s)&		\cos \theta (s)\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_{_2}\\
\end{array} \right)
$
矢量方程化简为：
$
\left\{ \begin{aligned}
	\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa (s)+\cos \theta \left( s \right) q_x\left( s \right) -\sin \theta \left( s \right) q_y\left( s \right) &=0\\
	\mathrm{F}_1(s)\kappa (s)+\mathrm{F}_2'(s)+\cos \theta \left( s \right) q_y\left( s \right) +\sin \theta \left( s \right) q_x\left( s \right) &=0\\
	\mathrm{M}'\left( \mathrm{s} \right) +\mathrm{F}_2\left( \mathrm{s} \right) +m\left( s \right) &=0\\
	\kappa \left( s \right) &=-\theta'\left( s \right)\\
\end{aligned} \right.
$
在这里分两种情况进行讨论：
① 小角度情况： $ \theta(s)\approx0$ ，此时标架与固定坐标系重合，(6)式化简为：
$
\left\{ \begin{aligned}
	\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa (s)+q_x\left( s \right) &=0\\
	\mathrm{F}_1(s)\kappa (s)+\mathrm{F}_2'(s)+q_y\left( s \right) &=0\\
	\mathrm{M}'\left( \mathrm{s} \right) +\mathrm{F}_2\left( \mathrm{s} \right) +m\left( s \right) &=0\\
	\kappa \left( s \right) &=-\theta'\left( s \right)\\
\end{aligned} \right.
$
对于不可拉伸梁结构，轴力为常数。对于悬臂梁右端轴力为零，因此 $\rm F_1 =0$ 。
$
\left\{ \begin{aligned}
	\mathrm{F}_2(s)\kappa (s)+q_x\left( s \right) &=0\\
	\mathrm{F}_2'(s)+q_y\left( s \right) &=0\\
	\mathrm{M}'\left( \mathrm{s} \right) +\mathrm{F}_2\left( \mathrm{s} \right) +m\left( s \right) &=0\\
	\kappa \left( s \right) &=-\theta'\left( s \right)\\
	\mathrm{M}\left( \mathrm{s} \right) &=\mathrm{EI}\kappa \left( \mathrm{s} \right)\\
\end{aligned} \right.
$
由(8)式得到：$ q_y\left( s \right) =\mathrm{EI}\kappa''\left( \mathrm{s} \right) +m'\left( s \right)  $

对于恒定弯矩载荷作用梁，上式退化为经典的欧拉梁公式：
$
q_y\left( s \right) =(\mathrm{EI}\kappa \left( \mathrm{s} \right))''=\frac{\partial^2}{\partial s^2}(\mathrm{EI}\frac{\partial^2u(s)}{\partial s^2})
$
② 外力载荷为0的情况：此时 q_x(s)=0,q_y(s)=0 

(6)式化简为：
$
\left\{ \begin{aligned}
	\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa (s)&=0\\
	\mathrm{F}_1(s)\kappa (s)+\mathrm{F}_2'(s)&=0\\
	\mathrm{M}'\left( \mathrm{s} \right) +\mathrm{F}_2\left( \mathrm{s} \right) +m\left( s \right) &=0\\
	\kappa \left( s \right) &=-\theta'\left( s \right)\\
	\mathrm{M}\left( \mathrm{s} \right) &=\mathrm{EI}\kappa \left( \mathrm{s} \right)\\
\end{aligned} \right.
$
(10)式化简为：
$
\left\{ \begin{array}{c}
	\mathrm{m}\left( s \right) \kappa \left( s \right) +\left( \frac{\mathrm{m}'(s)}{\kappa \left( \mathrm{s} \right)} \right)'+\mathrm{EI}\left( \frac{\kappa \left( \mathrm{s} \right) ^2}{2}+\frac{\kappa''\left( \mathrm{s} \right)}{\kappa \left( \mathrm{s} \right)} \right)'=0\\
	\mathrm{F}_2\left( s \right) \kappa \left( s \right) +\left( \frac{\mathrm{F}_2'(s)}{\kappa \left( \mathrm{s} \right)} \right)'=0\\
	\mathrm{m}\left( \mathrm{s} \right) +\mathrm{EI}\kappa'\left( \mathrm{s} \right) +\mathrm{F}_2\left( \mathrm{s} \right) =0\\
\end{array} \right.
$
如果外力矩载荷为零， $ \rm m(s)=0$ 。得到：$ \frac{\kappa \left( \mathrm{s} \right) ^2}{2}+\frac{\kappa''\left( \mathrm{s} \right)}{\kappa \left( \mathrm{s} \right)}=c $，展开后即为Euler Elastica方程([弹性线问题与数值求解](https://lijh0417.github.io/2022/11/02/%E5%BC%B9%E6%80%A7%E7%BA%BF%E9%97%AE%E9%A2%98%E4%B8%8E%E6%95%B0%E5%80%BC%E6%B1%82%E8%A7%A3/)中通过能量方法已经得到)：
$
\kappa'' \left( \mathrm{s} \right) +\frac{\kappa \left( \mathrm{s} \right) ^3}{2}+\mathrm{c}\kappa \left( \mathrm{s} \right) =0
$

### 二维稳态理论
二维稳态理论可简化为：
$
\frac{\partial \mathbf{F}}{\partial s}+\boldsymbol{q}=\rho \mathrm{A}\left( v_t\mathbf{d}_1+v^2\kappa \left( s \right) \mathbf{d}_2 \right) 
$
$
\frac{\partial \mathbf{M}}{\partial s}+\frac{\partial \boldsymbol{r}}{\partial s}\times \mathbf{F}+\mathbf{m}=\rho \mathrm{I}_0\left( \kappa \left( s \right) v_t+v^2\kappa' \left( s \right) \right) \mathbf{d}_3
$
$
\dot{\boldsymbol{r}}=v\mathbf{d}_1
$
$
\mathbf{d}_1=\frac{\partial u}{\partial s}
$
$
\mathbf{\Gamma }=\mathbf{R}_s\mathbf{R}^{\mathbf{T}}
$
$
\mathbf{\Omega }=v\mathbf{R}_s\mathbf{R}^{\mathbf{T}}
$
$
\mathbf{M}=\mathrm{EI(}\mathbf{\Gamma })
$
简化条件：
$
\mathbf{F}=\mathrm{F}_1\mathbf{d}_1+\mathrm{F}_2\mathbf{d}_2
$
$
\mathbf{M}=\mathrm{M}\mathbf{d}_3
$
$
\tau =0
$
$
\mathbf{d}'_3=0
$
$
\mathbf{d}'_1=\kappa \mathbf{d}_2
$
$
\mathbf{d}'_2=-\kappa \mathbf{d}_1
$
$
\mathrm{M}=\mathrm{EI}\kappa 
$
$
\left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_{_2}\\
\end{array} \right) =\left( \begin{matrix}
	\cos \theta (s)&		-\sin \theta (s)\\
	\sin \theta (s)&		\cos \theta (s)\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathbf{x}\\
	\mathbf{y}\\
\end{array} \right) 
$
$
\left( \begin{matrix}
	0&		\kappa\\
	-\kappa&		0\\
\end{matrix} \right) =\left( \begin{matrix}
	0&		-\theta'(s)\\
	\theta'(s)&		0\\
\end{matrix} \right) 
$
$
\boldsymbol{m}=m\left( \mathrm{s} \right) \mathbf{d}_3
$
$
\boldsymbol{q}=q_x\left( s \right) \boldsymbol{i}+q_y\left( s \right) \boldsymbol{j}=\left( \begin{matrix}
	q_x\left( s \right)&		q_y\left( s \right)\\
\end{matrix} \right) \left( \begin{array}{c}
	\boldsymbol{i}\\
	\boldsymbol{j}\\
\end{array} \right) =\left( \begin{matrix}
	q_x\left( s \right)&		q_y\left( s \right)\\
\end{matrix} \right) \left( \begin{matrix}
	\cos \theta (s)&		\sin \theta (s)\\
	-\sin \theta (s)&		\cos \theta (s)\\
\end{matrix} \right) \left( \begin{array}{c}
	\mathbf{d}_1\\
	\mathbf{d}_{_2}\\
\end{array} \right)
$
矢量方程简化为：
$
\left\{ \begin{aligned}
	\mathrm{F}_1'(s)-\mathrm{F}_2(s)\kappa (s)+\cos \theta \left( s \right) q_x\left( s \right) -\sin \theta \left( s \right) q_y\left( s \right) &=\rho \mathrm{A}v_t\\
	\mathrm{F}_1(s)\kappa (s)+\mathrm{F}_2'(s)+\cos \theta \left( s \right) q_y\left( s \right) +\sin \theta \left( s \right) q_x\left( s \right) &=\rho \mathrm{A}v^2\kappa \left( s \right)\\
	\mathrm{M}'\left( \mathrm{s} \right) +\mathrm{F}_2\left( \mathrm{s} \right) +m\left( s \right) &=\rho I_0\left( \kappa \left( s \right) v_t+v^2\kappa'\left( s \right) \right)\\
	\kappa \left( s \right) &=-\theta'\left( s \right)\\
\end{aligned} \right.
$
上式化简为：
$
\left\{ \begin{array}{c}
	\mathrm{m}\left( s \right) \kappa \left( s \right) +\left( \frac{\mathrm{m}'(s)}{\kappa \left( \mathrm{s} \right)} \right)'+\mathrm{EI}\left( \frac{\kappa \left( \mathrm{s} \right) ^2}{2}+\frac{\kappa''\left( \mathrm{s} \right)}{\kappa \left( \mathrm{s} \right)} \right)'-\sin\mathrm{(}\theta (s))\left( \left( \frac{q_x\left( s \right)}{\kappa \left( s \right)} \right)'+2q_y(s) \right) +\cos\mathrm{(}\theta (s))\left( 2q_x(s)\frac{q_y(s)}{\kappa (s)}-\left( \frac{q_y\left( s \right)}{\kappa \left( s \right)} \right)' \right)=v_t\left( \rho \mathrm{A}+\rho \mathrm{I}_0\kappa \left( s \right) ^2+\rho \mathrm{I}_0\left( \frac{\kappa'\left( s \right)}{\kappa \left( s \right)} \right)' \right) +v^2\rho \mathrm{I}_0\left( \left( \frac{\kappa (s)^2}{2} \right)'+\left( \frac{\kappa''\left( s \right)}{\kappa \left( s \right)} \right)' \right)-\sin\mathrm{(}\theta (s))\left( \left( \frac{q_x\left( s \right)}{\kappa \left( s \right)} \right)'+2q_y(s) \right) +\cos\mathrm{(}\theta (s))\left( 2q_x(s)-\left( \frac{q_y\left( s \right)}{\kappa \left( s \right)} \right)' \right) =\rho \mathrm{A}v_t\\
	\left( \begin{matrix}
	\cos \left( \theta \left( s \right) \right)&		-\sin \left( \theta \left( s \right) \right)\\
\end{matrix} \right)'\left( \frac{1}{\kappa \left( s \right)}\left( \begin{array}{c}
	q_x\\
	q_y\\
\end{array} \right) \right)'+2\left( \begin{matrix}
	\cos \left( \theta \left( s \right) \right)&		-\sin \left( \theta \left( s \right) \right)\\
\end{matrix} \right) \left( \begin{array}{c}
	q_x\left( s \right)\\
	q_y\left( s \right)\\
\end{array} \right) =\rho \mathrm{A}v_t\\
	\mathrm{F}_2\left( s \right) \kappa \left( s \right) +\left( \frac{\mathrm{F}_2'(s)}{\kappa \left( \mathrm{s} \right)} \right)'=0\\
	\mathrm{m}\left( \mathrm{s} \right) +\mathrm{EI}\kappa'\left( \mathrm{s} \right) +\mathrm{F}_2\left( \mathrm{s} \right) =\rho \mathrm{I}_0\left( v_t\kappa \left( s \right) +v^2\kappa'\left( s \right) \right)\\
\end{array} \right.
$
