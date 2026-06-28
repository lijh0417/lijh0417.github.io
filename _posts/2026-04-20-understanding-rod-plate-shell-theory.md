---
title: "Understanding Rod, Plate, and Shell Theories"
date: 2026-04-20
tags:
  - Geometric Elasticity
  - Rod
  - Shell
lang: en
ref: understanding-rod-plate-shell-theory
permalink: /2026/04/understanding-rod-plate-shell-theory/
---
Rod, plate, and shell theories are essential for both engineering practice and understanding complex physical phenomena, yet developing a solid grasp of these foundational ideas is far from trivial.

<!-- more -->

# Rod, Plate, and Shell Through the Lens of Classical Differential Geometry

> Deriving Cosserat rod, plate, and shell theories by applying invariance under superimposed rigid-body motions to the integral form of the first law of thermodynamics.

---

## Part 1 — Classical Differential Geometry

### 1.1 E³ 中的曲线

一条曲线 $\mathcal{C} \subset \mathbb{E}^3$ 由弧长参数 $s$ 表示为 $\mathbf{r}(s)$，满足 $\|\mathrm{d}\mathbf{r}/\mathrm{d}s\| = 1$。Frenet–Serret 标架 $\{\mathbf{t}, \mathbf{n}, \mathbf{b}\}$ 满足：

$$
\frac{\mathrm{d}\mathbf{t}}{\mathrm{d}s} = \kappa \mathbf{n},\quad
\frac{\mathrm{d}\mathbf{n}}{\mathrm{d}s} = -\kappa \mathbf{t} + \tau \mathbf{b},\quad
\frac{\mathrm{d}\mathbf{b}}{\mathrm{d}s} = -\tau \mathbf{n}.
$$

曲率 $\kappa \ge 0$，挠率 $\tau$。任意参数 $\theta$ 下：$\mathrm{d}s = \|\mathbf{r}_{,\theta}\|\,\mathrm{d}\theta$，$\mathbf{t} = \mathbf{r}_{,\theta}/\|\mathbf{r}_{,\theta}\|$。

### 1.2 E³ 中的曲面

曲面 $\mathcal{S}$ 由 Gauss 坐标 $\theta^\alpha$（$\alpha=1,2$）参数化：

$$
\mathbf{r} = \mathbf{r}(\theta^1,\theta^2).
$$

**基矢量**：$\mathbf{a}_\alpha = \mathbf{r}_{,\alpha}$，单位法向 $\mathbf{a}_3 = \mathbf{a}_1\times\mathbf{a}_2/\|\mathbf{a}_1\times\mathbf{a}_2\|$。

**第一基本型**（度量张量）：

$$
a_{\alpha\beta} = \mathbf{a}_\alpha\cdot\mathbf{a}_\beta,\qquad a = \det(a_{\alpha\beta}).
$$

**第二基本型**：

$$
b_{\alpha\beta} = \mathbf{a}_3\cdot\mathbf{a}_{\alpha,\beta} = -\mathbf{a}_{3,\alpha}\cdot\mathbf{a}_\beta,
\quad b_{\alpha\beta} = b_{\beta\alpha}.
$$

**Christoffel 符号**：

$$
\Gamma^\gamma_{\alpha\beta} = \tfrac12 a^{\gamma\delta}(a_{\alpha\delta,\beta}+a_{\beta\delta,\alpha}-a_{\alpha\beta,\delta}).
$$

**Gauss–Weingarten 方程**：

$$
\mathbf{a}_{\alpha,\beta} = \Gamma^\gamma_{\alpha\beta}\mathbf{a}_\gamma + b_{\alpha\beta}\mathbf{a}_3,\qquad
\mathbf{a}_{3,\alpha} = -b^\beta_\alpha\mathbf{a}_\beta,\quad b^\beta_\alpha = a^{\beta\gamma}b_{\gamma\alpha}.
$$

**Gauss–Codazzi 方程**：

$$
R_{\alpha\beta\gamma\delta} = b_{\alpha\gamma}b_{\beta\delta} - b_{\alpha\delta}b_{\beta\gamma},\qquad
b_{\alpha\beta|\gamma} = b_{\alpha\gamma|\beta}.
$$

**Riemann–Christoffel 张量**：
$R^\delta_{\alpha\beta\gamma} = \Gamma^\delta_{\alpha\gamma,\beta} - \Gamma^\delta_{\alpha\beta,\gamma} + \Gamma^\epsilon_{\alpha\gamma}\Gamma^\delta_{\epsilon\beta} - \Gamma^\epsilon_{\alpha\beta}\Gamma^\delta_{\epsilon\gamma}$.

**Gauss 曲率与平均曲率**：

$$
K = \frac{\det(b_{\alpha\beta})}{\det(a_{\alpha\beta})},\qquad
H = \tfrac12 b^\alpha_\alpha.
$$

**面积元变化率**（用于平衡律局部化）：

$$
\frac{\mathrm{D}}{\mathrm{D}t}(\mathrm{d}a) = (v^\alpha_{|\alpha} - b^\alpha_\alpha v_3)\,\mathrm{d}a,
$$

其中 $v^\alpha = \dot{\mathbf{r}}\cdot\mathbf{a}^\alpha$，$v_3 = \dot{\mathbf{r}}\cdot\mathbf{a}^3$，竖线 $|$ 表示协变导数。

> **总结 1.1**
>
> - 曲线由 Frenet 标架 $\{\mathbf{t},\mathbf{n},\mathbf{b}\}$ 和 $\kappa,\tau$ 描述
> - 曲面由 $\{a_{\alpha\beta}, b_{\alpha\beta}\}$ 描述，满足 Gauss–Codazzi 方程
> - 面积元变化率公式是局部化的关键工具

---

## Part 2 — Cosserat Rod (Directed Curve)

### 2.1 Kinematics

一条 Cosserat 杆由曲线 $\mathbf{r} = \mathbf{r}(\theta,t)$ 和两个 director $\mathbf{d}_\alpha(\theta,t)$（$\alpha=1,2$）构成。定义基矢量：

$$
\mathbf{a}_\alpha = \mathbf{d}_\alpha,\qquad \mathbf{a}_3 = \mathbf{r}_{,\theta}.
$$

$\{\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3\}$ 构成随体标架；$\mathbf{a}^i$ 为对偶基：$\mathbf{a}^i\cdot\mathbf{a}_j = \delta^i_j$。度量张量：

$$
a_{ij} = \mathbf{a}_i\cdot\mathbf{a}_j,\qquad a = \det(a_{ij}).
$$

标架梯度（wryness）：

$$
\kappa_{ir} = \mathbf{a}_r\cdot\mathbf{a}_{i,\theta},\qquad
\kappa_{ir} + \kappa_{ri} = a_{ir,\theta}.
$$

速度场：$\mathbf{v} = \dot{\mathbf{r}}$，$\mathbf{w}_\alpha = \dot{\mathbf{d}}_\alpha$。速度梯度：

$$
c_{ki} = \mathbf{a}_k\cdot\dot{\mathbf{a}}_i = \eta_{ki} + \psi_{ki},
$$

其中 $\eta_{ki} = c_{(ki)}$ 为对称部分（伸长率），$\psi_{ki} = c_{[ki]}$ 为反对称部分（旋率）。

有了运动学量后，我们需要定义**变形度量**来刻画杆偏离参考位形的程度。最自然的做法是比较当前度量 $a_{ij}$ 与参考度量 $A_{ij}$，以及当前标架梯度 $\kappa_{\alpha i}$ 与参考梯度 $K_{\alpha i}$：

$$
\gamma_{ij} = a_{ij} - A_{ij},\qquad
\sigma_{\alpha i} = \kappa_{\alpha i} - K_{\alpha i}.
$$

$\gamma_{ij}$ 度量伸长与剪切（$i=j=3$ 为轴向伸长，$i=\alpha,j=3$ 为剪切），$\sigma_{\alpha i}$ 度量弯曲与扭转。这一定义与 Green–Laws (1966) 一致。

> **替代方案**：Cohen (1966) 使用三 director 体系和 Cartan–Ericksen–Truesdell 应变度量 $Y^\alpha, C_{\alpha\beta}, F^\alpha_\beta$。这些可以通过投影与 $(\gamma_{ij},\sigma_{\alpha i})$ 相互转换，但 Cohen 的第三 director $Y^3, F^3_\beta$ 在两 director 理论中无对应量。

### 2.2 Integral Form of the Energy Balance

要推导运动方程和本构关系，我们需要一个物理出发点。这个出发点就是**热力学第一定律**（能量守恒与转化）的积分形式。对于杆上任意一段 $[\theta_1,\theta_2]$，能量平衡陈述为：**该段杆的动能与内能之和的变化率，等于外力功率、热源供给与边界热流之和**。数学表达为：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2} \rho\Bigl(U + \tfrac12\mathbf{v}\cdot\mathbf{v} + \tfrac12 y^{\alpha\beta}\mathbf{w}_\alpha\cdot\mathbf{w}_\beta\Bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
= \int_{\theta_1}^{\theta_2} \rho\bigl(r + \mathbf{f}\cdot\mathbf{v} + \mathbf{l}^\alpha\cdot\mathbf{w}_\alpha\bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[\mathbf{n}\cdot\mathbf{v} + \mathbf{p}^\alpha\cdot\mathbf{w}_\alpha - h\Bigr]_{\theta_1}^{\theta_2}.
$$

各符号含义：

- $\rho$：单位长度质量；$U$：单位质量内能
- $\tfrac12\mathbf{v}\cdot\mathbf{v}$：平动动能密度
- $\tfrac12 y^{\alpha\beta}\mathbf{w}_\alpha\cdot\mathbf{w}_\beta$：director 转动动能密度（$y^{\alpha\beta}=y^{\beta\alpha}$ 为 director 惯性系数）
- $r$：单位质量热源；$\mathbf{f}$：单位质量体力
- $\mathbf{l}^\alpha$：单位质量 director 力（含惯性修正项）
- $\mathbf{n}$：截面力合力；$\mathbf{p}^\alpha$：截面 director 力合力
- $h$：沿 $\theta$ 方向的热流

**这是整个推导的起点。**

### 2.3 Invariance Under Superimposed Rigid Translations → Linear Momentum Equation

考虑叠加均匀刚体平动速度 $\mathbf{b}$。在新的运动中：

$$
\mathbf{v}^* = \mathbf{v} + \mathbf{b},\qquad 
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha,\qquad
\mathbf{n}^* = \mathbf{n},\qquad
\mathbf{p}^{\alpha*} = \mathbf{p}^\alpha,\qquad
h^* = h,
$$

且 $\rho$、$U$、$r$、$\mathbf{f}-\dot{\mathbf{v}}$、$\mathbf{l}^\alpha$ 均不变。将 $\mathbf{v}\to\mathbf{v}+\mathbf{b}$ 代入 (2.1)，减去原式，利用 $\mathbf{b}$ 的任意性，得到：

**质量守恒（积分形式 → 局部形式）**：

$$
\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}} = 0.
$$

**线动量方程（积分形式 → 局部形式）**：

$$
\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{n}}{\partial\theta} + \rho\mathbf{f} = \rho\dot{\mathbf{v}}.
\tag{2.2}
$$

**推导逻辑**：$\mathbf{b}$ 任意 → 系数为零 → 首先给出质量守恒；再由质量守恒简化剩余项 → 线动量方程 (2.2)。这一步消去了能量平衡中与 $\mathbf{v}$ 有关的所有动能项。

### 2.4 Invariance Under Superimposed Rigid Rotations → Angular Momentum Equation

平动不变性已经给出了线动量方程。但能量平衡中还存在与转动相关的项（通过 $\mathbf{w}_\alpha$ 和 $\mathbf{v}$ 中的旋率部分），这些项需要利用**刚体转动不变性**来约束。也就是说，当我们给整个系统叠加一个均匀的刚体角速度 $\boldsymbol{\omega}$ 时，杆在相同占位下的能量平衡形式应保持不变。在新的运动中，各量的变换规则为：

$$
\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r},\qquad
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha + \boldsymbol{\omega}\times\mathbf{d}_\alpha,
$$

$$
\eta_{ki}^* = \eta_{ki},\qquad
\psi_{ki}^* = \psi_{ki} - \Omega_{ki},
$$

其中 $\Omega_{ki} = \varepsilon_{kim}\omega^m$。$\rho$、$r$、$U$、$\mathbf{n}$、$\mathbf{p}^\alpha$、$\mathbf{q}^\alpha \equiv \mathbf{l}^\alpha - \tfrac12\dot{y}^{\alpha\beta}\mathbf{w}_\beta - y^{\alpha\beta}\ddot{\mathbf{w}}_\beta$ 均不变。

将以上变换代入能量方程，利用 $\boldsymbol{\omega}$ 的任意性，得到：

**角动量方程**：

$$
\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{m}}{\partial\theta} + \frac{1}{\sqrt{a_{33}}}\mathbf{a}_3\times\mathbf{n} + \rho\dot{\mathbf{g}} = 0,
\tag{2.3}
$$

其中力偶合力与体力偶定义为：

$$
\mathbf{m} = \mathbf{a}_\alpha\times\mathbf{p}^\alpha,\qquad
\dot{\mathbf{g}} = \mathbf{a}_\alpha\times\mathbf{q}^\alpha.
$$

**分量形式（对称性条件）**：

$$
\pi^{[\alpha\beta]} + \frac{1}{2\sqrt{a_{33}}}\bigl(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha} - p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}\bigr) = 0,
\tag{2.4}
$$

$$
\pi^{\beta3} + \frac{1}{\sqrt{a_{33}}}\bigl(p^{\alpha3}\kappa_\alpha^{\cdot\beta} - p^{\alpha\beta}\kappa_\alpha^{\cdot3}\bigr) - \frac{1}{\sqrt{a_{33}}}n^\beta = 0,
\tag{2.5}
$$

其中 $\pi^{\alpha i}$ 为组合 director 力。

### 2.5 Reduced Energy Equation

利用质量守恒 (2.2) 的推论和线动量方程 (2.2)，从完整的能量平衡中消去动能项，局部化后得到 **约化能量方程** $[\text{Green–Laws 1966, Eq 3.16}]$：

$$
-\rho\dot{U} + \rho r + \eta_{k\alpha}\,\pi^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\bigl(\dot{\kappa}_{\alpha k} - \eta_{kj}\,\kappa_\alpha^{\cdot j}\bigr)\,\mathbf{p}^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\,\eta_{k3}\,\mathbf{n}\cdot\mathbf{a}^k
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{2.6}
$$

引入 Helmholtz 自由能 $A = U - TS$，约化能量方程改写为：

$$
-\rho(\dot{A} + T\dot{S} + \dot{T}S) + \rho r
+ \Bigl[\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta})\Bigr]\eta_{\alpha\beta}
+ \frac{2}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta})\eta_{\beta3}
+ \frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3})\eta_{33}
+ \frac{1}{\sqrt{a_{33}}}p^{\alpha i}\dot{\kappa}_{\alpha i}
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{2.7}
$$

### 2.6 Clausius–Duhem Entropy Inequality

第二定律的积分形式 $[\text{Green–Laws 1966, Eq 3.18}]$：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2} \rho S\sqrt{a_{33}}\,\mathrm{d}\theta
- \int_{\theta_1}^{\theta_2} \frac{\rho r}{T}\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[\frac{h}{T}\Bigr]_{\theta_1}^{\theta_2} \ge 0.
$$

局部化得：

$$
\rho\dot{S}T - \rho r + \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta}
- \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0.
\tag{2.8}
$$

### 2.7 Elastic Rod Constitutive Theory

对于弹性杆，自由能函数形式为 $[\text{Green–Laws 1966, Eq 5.1}]$：

$$
A = A(T, \gamma_{ij}, \sigma_{\alpha i}),
$$

其中 $\gamma_{ij} = a_{ij}-A_{ij}$，$\sigma_{\alpha i} = \kappa_{\alpha i}-K_{\alpha i}$。注意到 $\dot{\gamma}_{ij}=2\eta_{ij}$，$\dot{\sigma}_{\alpha i}=\dot{\kappa}_{\alpha i}$。

将 $\dot{A}$ 代入 Clausius–Duhem 不等式 (2.8) 与约化能量方程 (2.7) 联合，利用应变率 $\{\eta_{ij},\dot{\kappa}_{\alpha i}\}$ 和 $\dot{T}$ 的独立性，得到：

**熵状态方程**：

$$
S = -\frac{\partial A}{\partial T}.
\tag{2.9}
$$

**应力本构方程**：

$$
\frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3}) = 2\rho\frac{\partial A}{\partial\gamma_{33}},
$$

$$
\frac{1}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta}) = \rho\frac{\partial A}{\partial\gamma_{\beta3}},
$$

$$
\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) = 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}},
$$

$$
\frac{1}{\sqrt{a_{33}}}p^{\alpha i} = \rho\frac{\partial A}{\partial\sigma_{\alpha i}}.
\tag{2.10}
$$

**热传导不等式**：

$$
-h\,\frac{\partial T}{\partial\theta} \ge 0.
\tag{2.11}
$$

对于各向同性材料，自由能可用不变量表示 $[\text{Kafadar 1972}]$：

$$
A = A(I_1,I_2,I_3,I_4,I_5,T),\quad
I_1 = \tfrac12\mathfrak{C}\cdot\mathfrak{C},\; I_2 = \mathfrak{C}\cdot\Gamma,\; I_3 = \tfrac12\Gamma\cdot\Gamma,\;
I_4 = \mathfrak{C}\cdot\Lambda,\; I_5 = \Gamma\cdot\Lambda.
$$

本构系数 $\alpha_n = \rho_0\partial A/\partial I_n$ 给出横观各向同性杆的应力–应变关系：

$$
\mathbf{t} = \alpha_1 J\boldsymbol{\lambda} + \alpha_2 J\boldsymbol{\gamma} + \alpha_4\boldsymbol{\lambda}^*,\qquad
\mathbf{m} = \alpha_2 J\boldsymbol{\lambda} + \alpha_3 J\boldsymbol{\gamma} + \alpha_5\boldsymbol{\lambda}^*.
$$

### 2.8 Special Cases

**Kirchhoff 杆**（不可伸长、不可剪切）：$a_{ij}=\delta_{ij}$，$\gamma_{ij}=0$。直接与 Frenet 标架重合：$\mathbf{d}_1=\mathbf{n}$，$\mathbf{d}_2=\mathbf{b}$，$\mathbf{d}_3=\mathbf{t}$。杆的曲率 $\kappa$、挠率 $\tau$ 满足：

自由能 $A = A(T, \bar\kappa,\bar\kappa',\bar\tau)$，其中 $\bar\kappa=\kappa-\kappa_0$，$\bar\kappa'=\kappa'-\kappa_0'$，$\bar\tau=\tau-\tau_0$。力偶本构：

$$
m_1 = \rho\frac{\partial A}{\partial\bar\kappa},\quad
m_2 = \rho\frac{\partial A}{\partial\bar\kappa'},\quad
m_3 = \rho\frac{\partial A}{\partial\bar\tau}.
$$

**Euler 弹性线**：小变形、无扭转时，$A = \tfrac12 EI \kappa^2$，屈曲临界载荷 $P_{\mathrm{cr}} = \pi^2 EI/(4L^2)$。

> **总结 2.1**
>
> - 从积分形式能量平衡 (2.1) 出发
> - 叠加刚体平动 → 线动量方程 (2.2)
> - 叠加刚体转动 → 角动量方程 (2.3) + 对称性条件 (2.4)–(2.5)
> - 消去动能项 → 约化能量方程 (2.6)–(2.7)
> - Clausius–Duhem 不等式 → (2.9)–(2.11)
> - 使用应变能函数 $A(T,\gamma_{ij},\sigma_{\alpha i})$ 得到弹性本构

---

## Part 3 — Cosserat Plate and Shell (Directed Surface)

### 3.1 运动学

一个 Cosserat 曲面由位置向量 $\mathbf{r} = \mathbf{r}(\theta^\alpha,t)$ 和一个 director $\mathbf{d}(\theta^\alpha,t)$ 构成。定义基矢量：

$$
\mathbf{a}_\alpha = \mathbf{r}_{,\alpha},\qquad \mathbf{a}_3 = \mathbf{d}.
$$

注意与经典曲面不同，$\mathbf{a}_3$ 不再是单位法向，而是可伸缩、可剪切的可变形 director。度量张量：

$$
a_{ij} = \mathbf{a}_i\cdot\mathbf{a}_j,\qquad a = \det(a_{\alpha\beta}).
$$

**Gauss–Weingarten 型方程**：

$$
\mathbf{a}_{\alpha,\beta} = \Gamma^\gamma_{\alpha\beta}\mathbf{a}_\gamma + b_{\alpha\beta}\mathbf{a}_3,\qquad
\mathbf{d}_{,\alpha} = \lambda_{\alpha i}\,\mathbf{a}^i = \lambda^{\,i}_{\alpha}\mathbf{a}_i,
$$

其中 $b_{\alpha\beta}$ 是推广的第二基本型，$\lambda_{i\alpha} = \mathbf{a}_i\cdot\mathbf{d}_{,\alpha}$ 为 director 梯度。

速度场：$\mathbf{v} = \dot{\mathbf{r}}$，$\mathbf{w} = \dot{\mathbf{d}}$。

### 3.2 变形度量

参考杆的推导思路（第 2.1 节），我们需要定义壳的变形度量来刻画曲面偏离参考位形的程度。壳有三个独立的变形模式：**面内伸缩与剪切**（由第一基本型的变化描述）、**弯曲**（由 director 梯度的变化描述）、以及**横向剪切与厚度伸缩**（由 director 自身的变化描述）。因此，应变度量取为 $[\text{Green–Naghdi–Wainwright 1965}]$：

$$
e_{\alpha\beta} = \tfrac12(a_{\alpha\beta} - A_{\alpha\beta}),\qquad
\kappa_{i\alpha} = \lambda_{i\alpha} - \Lambda_{i\alpha},\qquad
\delta_i = d_i - D_i.
$$

$e_{\alpha\beta}$ 为面内应变，$\kappa_{i\alpha}$ 为弯曲-剪切应变（director 梯度变化），$\delta_i$ 为 director 位移（横截面变形）。

### 3.3 积分形式的能量平衡

与杆的推导完全平行，我们从热力学第一定律的积分形式出发。对于曲面上任意区域 $\sigma$，边界为 $\mathcal{C}$，能量平衡陈述为：**动能与内能之和的变化率，等于外力功率、热源供给与边界热流之和**：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_\sigma \bigl(\tfrac12\rho\mathbf{v}\cdot\mathbf{v} + \rho U\bigr)\,\mathrm{d}\sigma
= \int_\sigma \rho\bigl(r + \mathbf{F}\cdot\mathbf{v} + \bar{\mathbf{L}}\cdot\mathbf{w}\bigr)\,\mathrm{d}\sigma
+ \int_{\mathcal{C}}\bigl(\mathbf{N}\cdot\mathbf{v} + \mathbf{M}\cdot\mathbf{w} - h\bigr)\,\mathrm{d}c.
\tag{3.1}
$$

各符号含义：

- $\rho$：单位面积质量
- $\mathbf{F}$：单位质量体力；$\bar{\mathbf{L}}$：单位质量 director 力（含惯性修正）
- $\mathbf{N}$：边界线力；$\mathbf{M}$：边界 director 力
- $h$：边界热流

**这是曲面理论的推导起点，与杆理论 (2.1) 完全平行。**

### 3.4 叠加刚体运动不变性 → 运动方程

与杆的推导逻辑相同（第 2.3 节），平动不变性可消去能量平衡中的平动动能项并给出线动量方程。**平动不变性**：叠加 $\mathbf{v}\to\mathbf{v}+\mathbf{b}$，$\mathbf{w}\to\mathbf{w}$。由于 $\mathbf{b}$ 是任意的，其系数必须为零，由此分离出独立于其他项的质量守恒和线动量方程。

**质量守恒**：

$$
\frac{\mathrm{D}\rho}{\mathrm{D}t} + \rho(v^\alpha_{|\alpha} - b^\alpha_\alpha v_3) = 0.
\tag{3.2}
$$

**线动量方程**：

$$
\mathbf{N}^\alpha_{|\alpha} + \rho\mathbf{F} = \rho\dot{\mathbf{v}}.
\tag{3.3}
$$

其中 $\mathbf{N}^\alpha$ 为应力合力张量，竖线 $|$ 表示曲面上协变导数。分量形式：

$$
N^{\beta\alpha}_{|\alpha} - b^\beta_\alpha N^{3\alpha} + \rho F^\beta = \rho c^\beta,\qquad
N^{3\alpha}_{|\alpha} + b_{\alpha\beta} N^{\beta\alpha} + \rho F^3 = \rho c^3.
\tag{3.4}
$$

**转动不变性**：与平动情况不同，转动不变性处理的是与 $\boldsymbol{\omega}$ 相关的旋率项。叠加 $\boldsymbol{\omega}$ 后 $\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r}$，$\mathbf{w}^* = \mathbf{w} + \boldsymbol{\omega}\times\mathbf{d}$。由于 $\boldsymbol{\omega}$ 是任意的，其系数必须为零。这给出两组条件：一组是角动量方程（moment of momentum），另一组是残差 director 力的交叉对称性条件：

$$
\mathbf{d}\times\bar{\mathbf{M}} = 0,\quad \bar{\mathbf{M}} = \mathbf{M} - \mathbf{M}^\alpha\nu_\alpha.
\tag{3.5}
$$

**角动量方程**：

$$
\mathbf{N}^\alpha\times\mathbf{a}_\alpha + (\mathbf{M}^\alpha\times\mathbf{d})_{|\alpha} + \rho\bar{\mathbf{L}}\times\mathbf{d} = 0.
\tag{3.6}
$$

### 3.5 约化能量方程 → Clausius–Duhem 不等式

利用线动量方程 (3.3) 和质量守恒 (3.2) 消去完整的能量平衡 (3.1) 中的动能项，局部化后得到约化能量方程 $[\text{Green–Naghdi–Wainwright 1965, Eq 4.6}]$：

$$
\rho r - q^\alpha_{|\alpha} - \rho\dot{U} + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} = 0,
\tag{3.7}
$$

其中 $N'^{\alpha\beta} = N^{\beta\alpha} - m^\alpha d^\beta - M^{\alpha\gamma}\lambda_{\,.\gamma}^\beta$ 为对称有效应力。

**Clausius–Duhem 不等式** $[\text{Green–Naghdi–Wainwright 1965, Eq 3.25}]$：

$$
\int_\sigma \rho\dot{S}\,\mathrm{d}\sigma - \int_\sigma \frac{\rho r}{T}\,\mathrm{d}\sigma + \int_{\mathcal{C}} \frac{h}{T}\,\mathrm{d}c \ge 0.
$$

局部化后联合约化能量方程：

$$
-\rho(\dot{A} + \dot{T}S) + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\tag{3.8}
$$

### 3.6 弹性 Cosserat 曲面本构方程

对于弹性壳，Helmholtz 自由能 $A = U - TS$ 的独立变量 $[\text{Green–Naghdi–Wainwright 1965, Eq 5.1}]$：

$$
A = A(T,\,e_{\alpha\beta},\,\kappa_{i\alpha},\,\delta_i).
$$

应变率与运动学量的关系：$\dot{e}_{\alpha\beta} = \eta_{\alpha\beta}$，$\dot{\kappa}_{i\alpha} = \dot{\lambda}_{i\alpha}$，$\dot{\delta}_i = \dot{d}_i$。

将 $\dot{A} = \frac{\partial A}{\partial T}\dot{T} + \frac{\partial A}{\partial e_{\alpha\beta}}\eta_{\alpha\beta} + \frac{\partial A}{\partial \kappa_{i\alpha}}\dot{\lambda}_{i\alpha} + \frac{\partial A}{\partial \delta_i}\dot{d}_i$ 代入 (3.8)，利用 $\{\eta_{\alpha\beta},\dot{\lambda}_{i\alpha},\dot{d}_i,\dot{T}\}$ 的独立性得到：

**熵**：

$$
S = -\frac{\partial A}{\partial T}.
\tag{3.9}
$$

**弹性本构方程**：

$$
N'^{\beta\alpha} = \rho\frac{\partial A}{\partial e_{\alpha\beta}},\qquad
m^i = \rho\frac{\partial A}{\partial \delta_i},\qquad
M^{i\alpha} = \rho\frac{\partial A}{\partial \kappa_{i\alpha}}.
\tag{3.10}
$$

**热传导不等式**：

$$
-q^\alpha T_{,\alpha} \ge 0.
\tag{3.11}
$$

**各向同性壳的联合不变量**：自由能 $A = A(T, J_1,\dots,J_{24})$，其中 24 个联合不变量由 $a_{\alpha\beta}$、$d_i$、$\lambda_{i\alpha}$ 及其参考值张成。对于二次各向同性弹性壳，自由能含 6 个独立弹性系数。

### 3.7 特例

**Kirchhoff–Love 壳**：$\mathbf{d} = \mathbf{a}_{3}$（单位法向），无横向剪切。面应变为 $e_{\alpha\beta} = \tfrac12(a_{\alpha\beta} - A_{\alpha\beta})$，弯曲应变为 $\kappa_{\alpha\beta} = b_{\alpha\beta} - B_{\alpha\beta}$。能量简化为 $\tilde{A} = \tilde{A}(T, e_{\alpha\beta}, \kappa_{\alpha\beta})$。

**Reissner–Mindlin 型**：$\mathbf{d}$ 独立旋转但保持单位长度（不可伸长），允许横向剪切。

**薄膜理论**：忽略弯曲刚度，仅保留面内应变 $e_{\alpha\beta}$ 的作用，$A = A(T, e_{\alpha\beta})$。

> **总结 3.1**
>
> - 与杆理论完全平行的推导链：积分能量平衡 (3.1) → 平动不变性 → (3.2)–(3.3) → 转动不变性 → (3.5)–(3.6) → 约化能量 (3.7) → Clausius–Duhem (3.8) → 弹性本构 (3.9)–(3.10)
> - 曲面理论需处理协变导数、Gauss 曲率效应和 $d_i$ 的面内外变形
> - Kirchhoff–Love、Reissner–Mindlin、薄膜是三种常见的约束特例

---

## Part 4 — Connections and Extensions

### 4.1 Reduction from 3D Elasticity to 1D/2D Theories

#### 4.1.1 Green–Laws–Naghdi Series Expansion Method

不将 Cosserat 理论作为基本假设，而是从经典 3D 连续介质力学出发，通过级数展开和厚度/横截面积分得到低维理论 $[\text{Green–Laws–Naghdi 1968}]$。

**壳的展开（一个厚度坐标 $\xi$）**：

$$
\mathbf{r}^*(\theta^\alpha,\xi,t) = \mathbf{r}(\theta^\alpha,t) + \sum_{N=1}^\infty \xi^N \mathbf{d}_N(\theta^\alpha,t).
\tag{4.1}
$$

$\mathbf{r}$ 为参考曲面 $\xi=0$ 的位置，$\mathbf{d}_1 \equiv \mathbf{d}$ 为主 director。将 (4.1) 代入 3D 能量平衡并对 $\xi$ 积分，得到精确的 2D 能量方程（含无穷级数）：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_\sigma \rho\Bigl(U + \tfrac12\mathbf{v}\cdot\mathbf{v} + \sum_{N=2}^\infty k^N\mathbf{w}_N\cdot\mathbf{v} + \tfrac12\sum_{M,N=1}^\infty k^{MN}\mathbf{w}_M\cdot\mathbf{w}_N\Bigr)\mathrm{d}\sigma
= \int_\sigma \rho\Bigl(r + \mathbf{F}\cdot\mathbf{v} + \sum_{N=1}^\infty \mathbf{L}^N\cdot\mathbf{w}_N\Bigr)\mathrm{d}\sigma
+ \oint\Bigl(\mathbf{N}\cdot\mathbf{v} + \sum_{N=1}^\infty \mathbf{M}^N\cdot\mathbf{w}_N - h\Bigr)\mathrm{d}c.
\tag{4.2}
$$

**杆的展开（两个横截面坐标 $\theta^\alpha$）**：

$$
\mathbf{r}^*(\theta^\alpha,\theta,t) = \mathbf{r}(\theta,t) + \sum_N \theta^{\alpha_1}\cdots\theta^{\alpha_n}\mathbf{d}_{\alpha_1\ldots\alpha_n}(\theta,t),\quad n=1,2,\ldots
\tag{4.3}
$$

其中 $\mathbf{d}_\alpha \equiv \mathbf{a}_\alpha$ 起 directors 的作用。对 $\theta^1,\theta^2$ 积分得精确 1D 能量方程。

**温度近似**：整个推导中**唯一**的近似是假定温度在厚度/横截面上均匀：

$$
T^*(\theta^\alpha,\xi,t) = T(\theta^\alpha,t)\quad\text{(壳)},\qquad
T^*(\theta^\alpha,\theta,t) = T(\theta,t)\quad\text{(杆)}.
$$

#### 4.1.2 Truncated Approximation → Direct Cosserat Theory

对基矢量展开进行截断：

- **壳**：$\mathbf{g}_\alpha = \mathbf{a}_\alpha + \xi\,\partial\mathbf{d}/\partial\theta^\alpha$（$\xi$ 一阶）；$\mathbf{g}_3$ 保持精确
- **杆**：$\mathbf{g}_\beta$ 保持精确；$\mathbf{g}_3 = \mathbf{a}_3 + \theta^\alpha\,\partial\mathbf{d}_\alpha/\partial\theta$（$\theta^\alpha$ 一阶）

假设施加的高阶 director 力为零（$\bar{L}^{Ni}=0$，$N\ge2$；$q^{\alpha_1\ldots\alpha_n i}=0$，$n\ge2$）。高阶 directors 通过 $\partial A/\partial d_{Ni}=0$ 消去。最终自由能的依赖关系退化为：

$$
A' = A'(T, e_{\alpha\beta}, \lambda_{i\alpha}, d_i)\quad\text{(壳)},\qquad
A' = A'(T, \gamma_{ij}, \kappa_{\alpha i})\quad\text{(杆)}.
$$

**结论**：直接 Cosserat 是 3D 级数展开的最低阶截断。两种形式在数学上等价，但直接理论的弹性系数是自由的，而截断理论可原则上从 3D 本构积分识别。

#### 4.1.3 Gibbs Function Method: 3D Constitutive → 1D Coefficients

对于线弹性圆截面杆，Green (1974 I, §5) 使用 Gibbs 函数 $\phi=\phi(\overline{\pi}^{(\alpha\beta)},\overline{\pi}^\alpha,\overline{\pi},p^{\alpha i})$ 实现 3D → 1D 的系数识别。将杆的横截面应力分解为**四个独立模式** $[\text{Green 1974 I, Eq 5.24}]$：

$$
\lambda\phi = \lambda\phi_{\mathrm{F1}} + \lambda\phi_{\mathrm{F2}} + \lambda\phi_{\mathrm{E}} + \lambda\phi_{\mathrm{T}}.
$$

**(a) 弯曲 F1**（绕 $A_1$ 轴，$\hat{m}_1,\hat{n}_2$ 活跃）：

应力假设 $[\text{Green 1974 I, Eq 5.25}]$：

$$
\sigma_{33} = \frac{\hat{m}_1 x_2}{I},\quad
\sigma_{23} = \frac{\hat{n}_2}{4I(1+\nu)}\Bigl[(\tfrac32+\nu)(R^2-x_2^2) - x_1^2(\tfrac12-\nu)\Bigr] - \frac{\hat{m}_1 RR'}{I}\Bigl[1 - \frac{2}{R^2}(x_1^2+x_2^2)\Bigr],\quad \text{etc.}
$$

Gibbs 函数：

$$
\lambda\phi_{\mathrm{F1}} = -\frac{\hat{m}_1^2}{2EI}\Bigl\{1 + 4(1+\nu)(R')^2\bigl[\tfrac23 + (R')^2\bigr]\Bigr\}
- \frac{\hat{n}_2^2}{12S\mu(1+\nu)^2}\Bigl[(7+14\nu+8\nu^2) + \frac{3(3+\nu)(1+2\nu)^2(R')^2}{2(1+\nu)}\Bigr]
+ \hat{n}_2\hat{m}_1\frac{RR'}{3EI}\Bigl[1 - 3(1+2\nu)(R')^2 - \frac{3\nu(1+2\nu)}{2(1+\nu)}\Bigr].
\tag{4.4}
$$

对于等截面杆（$R'=0$）：

$$
\lambda\phi_{\mathrm{F1}} = -\frac12\frac{\hat{m}_1^2}{EI} - \frac{1}{12}\frac{\hat{n}_2^2(7+14\nu+8\nu^2)}{\mu S(1+\nu)^2}.
\tag{4.5}
$$

**(b) 弯曲 F2**（绕 $A_2$ 轴，$\hat{m}_2,\hat{n}_1$ 活跃）：形式与 F1 完全对称。

**(c) 拉伸 E**（$\hat{n}_3,\hat{\pi}_{11},\hat{\pi}_{22}$ 活跃）：

$$
\lambda\phi_{\mathrm{E}} = -\frac{\hat{n}_3^2}{2ES}\Bigl[1 + \tfrac12(1+\nu)(R')^2 + \tfrac23(1-\nu)(R')^4\Bigr]
- \frac{\hat{\pi}_{11}^2+\hat{\pi}_{22}^2}{2ES} + \frac{\nu}{ES}\bigl[\hat{\pi}_{11}\hat{\pi}_{22} + \hat{n}_3(\hat{\pi}_{11}+\hat{\pi}_{22})\bigr].
\tag{4.6}
$$

**(d) 扭转 T**（$\hat{m}_3$ 活跃）：

$$
\lambda\phi_{\mathrm{T}} = -\frac{\hat{m}_3^2}{2\mu J}\Bigl[1 + \frac23(R')^2\Bigr],\quad J = \frac12\pi R^4.
\tag{4.7}
$$

本构方程（等截面，$R'=0$）$[\text{Green 1974 I, Eqs 5.47–5.50}]$：

$$
\hat{m}_1 = EI\,\hat{\kappa}_{23},\quad
\hat{n}_2 = \frac{6S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{23},
$$

$$
\hat{m}_2 = -EI\,\hat{\kappa}_{13},\quad
\hat{n}_1 = \frac{6S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{13},
$$

$$
\hat{n}_3 = C\Bigl[\hat{\gamma}_{33} + \frac{\nu}{1-\nu}(\hat{\gamma}_{11}+\hat{\gamma}_{22})\Bigr],\quad
\hat{\pi}_{11} = C\Bigl[\hat{\gamma}_{11} + \frac{\nu}{1-\nu}(\hat{\gamma}_{22}+\hat{\gamma}_{33})\Bigr],
$$

$$
\hat{m}_3 = \frac12\mu J(\hat{\kappa}_{12} - \hat{\kappa}_{21}),\quad
C = \frac12\frac{ES(1-\nu)}{(1+\nu)(1-2\nu)}.
\tag{4.8}
$$

Helmholtz 自由能形式 $[\text{Green 1974 I, Eq 5.52}]$：

$$
\lambda\psi_{\mathrm{F1}} = \tfrac12 EI\,\hat{\kappa}_{23}^2 + \frac{3S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{23}^2,\quad
\lambda\psi_{\mathrm{F2}} = \tfrac12 EI\,\hat{\kappa}_{13}^2 + \frac{3S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{13}^2,
$$

$$
\lambda\psi_{\mathrm{E}} = \tfrac14 C\Bigl[\hat{\gamma}_{11}^2+\hat{\gamma}_{22}^2+\hat{\gamma}_{33}^2 + \frac{2\nu}{1-\nu}(\hat{\gamma}_{11}\hat{\gamma}_{22}+\hat{\gamma}_{11}\hat{\gamma}_{33}+\hat{\gamma}_{22}\hat{\gamma}_{33})\Bigr],
$$

$$
\lambda\psi_{\mathrm{T}} = \tfrac18 \mu J(\hat{\kappa}_{12}-\hat{\kappa}_{21})^2.
\tag{4.9}
$$

**二次自由能分解（Green 1974 II 体系）**：

$$
2\lambda\psi = 2\lambda\psi_{\mathrm{F1}} + 2\lambda\psi_{\mathrm{F2}} + 2\lambda\psi_{\mathrm{E}} + 2\lambda\psi_{\mathrm{T}},
$$

其中 $[\text{Green 1974 II, Eqs 9.4–9.7}]$：

$$
2\lambda\psi_{\mathrm{F1}} = k_5\gamma_{23}^2 + k_{15}\kappa_{23}^2,\quad
2\lambda\psi_{\mathrm{F2}} = k_6\gamma_{13}^2 + k_{16}\kappa_{13}^2,
$$

$$
2\lambda\psi_{\mathrm{E}} = k_1\gamma_{11}^2 + k_2\gamma_{22}^2 + k_3\gamma_{33}^2 + k_7\gamma_{11}\gamma_{22} + k_8\gamma_{11}\gamma_{33} + k_9\gamma_{22}\gamma_{33} + k_{10}\kappa_{11}^2 + k_{11}\kappa_{22}^2 + k_{17}\kappa_{11}\kappa_{22},
$$

$$
2\lambda\psi_{\mathrm{T}} = \tfrac14 k_4(\gamma_{12}+\gamma_{21})^2 + k_{12}\kappa_{12}^2 + k_{13}\kappa_{21}^2 + k_{14}\kappa_{12}\kappa_{21}.
$$

**Timoshenko 梁方程的导出**：F1 模态在等截面时给出：

$$
\frac{\partial\hat{n}_2}{\partial\xi} + \rho f_2 = \rho c_2,\qquad
\frac{\partial\hat{m}_1}{\partial\xi} - \hat{n}_2 + \rho\hat{q}_{23} = 0.
$$

代入本构关系 $[\text{Green 1974 II, Eq 8.41}]$：

$$
\frac{\partial}{\partial\xi}\Bigl[k_5\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr) + k_{34}\frac{\partial\bar{\delta}_{23}}{\partial\xi}\Bigr] + \rho f_2 = \rho c_2,
$$

$$
\frac{\partial}{\partial\xi}\Bigl[k_{15}\frac{\partial\bar{\delta}_{23}}{\partial\xi} + k_{34}\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr)\Bigr] - k_5\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr) - k_{34}\frac{\partial\bar{\delta}_{23}}{\partial\xi} + \rho\hat{q}_{23} = 0.
\tag{4.10}
$$

**剪切修正系数**（等截面圆杆）：

$$
\hat{n}_2 = \frac{6S\mu(1+\nu)^2}{7+14\nu+8\nu^2}\,\hat{\gamma}_{23} \quad\Longrightarrow\quad
\kappa = \frac{6(1+\nu)^2}{7+14\nu+8\nu^2}.
$$

对于 $\nu=0.3$，$\kappa\approx0.886$，与 Cowper (1966) 一致。

### 4.2 Thermal Effects

**非等温理论**（Green–Naghdi 1970）：温度 $T$ 作为独立变量进入自由能 $A = A(T, \gamma_{ij}, \sigma_{\alpha i})$。熵 $S = -\partial A/\partial T$，热流本构 $h = -k\,\partial T/\partial\theta$。

**温度沿横截面均匀的近似**：这是从 3D 约化时的唯一近似。修正后的能量方程增加了熵项：

$$
\rho r - \rho T\dot{S} - \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
$$

这是残余能量方程（热传导方程），与力学本构解耦。

### 4.3 Constraint Theory

#### 4.3.1 Three Basic Types of Constraints

**(I) 不可伸长**：$\lambda=1$，等价于 $\mathfrak{C}_K\mathfrak{C}^K=1$，或 $\dot{\mathfrak{C}}_K\mathfrak{C}^K=0$。引入一个 Lagrange 乘子 $p$ $[\text{Kafadar 1972, Eq 6.1}]$：

$$
t^k = -p\lambda^k + \rho_0\chi_K^k\frac{\partial\psi}{\partial\mathfrak{C}_K},\qquad
m^k = \rho_0\chi_K^k\frac{\partial\psi}{\partial\Gamma_K}.
$$

**(II) 不可伸长 + 无旋转**：$\lambda=1$ 且 $\boldsymbol{\lambda}=\boldsymbol{\lambda}^*$。引入三个乘子 $p^k$ $[\text{Kafadar 1972, Eq 6.5}]$：

$$
t^k = -p^k,\qquad
m^k = \rho_0\chi_K^k\frac{\partial\psi}{\partial\Gamma_K}.
$$

这时 $\mathbf{t}$ 完全不确定（经典 Kirchhoff 杆的极限情形）。

**(III) 纯旋转约束**：$\boldsymbol{\lambda}=\boldsymbol{\lambda}^*$（可压缩）。引入三个乘子 $\pi_m$ $[\text{Kafadar 1972, Eq 6.9}]$：

$$
t^k = \rho_0\frac{\partial\psi}{\partial J}\lambda^k - \mu^k,\qquad
m^k = \rho_0\chi_K^k\frac{\partial\psi}{\partial\Gamma_K}.
$$

#### 4.3.2 Naghdi–Rubin Constraint Theory (1984)

杆理论中将约束分类为三种变形模式的抑制 $[\text{Naghdi–Rubin 1984}]$：

1. **法向横截面伸缩**：$|\bar{\mathbf{d}}_1| = |\bar{\mathbf{D}}_1|$，$|\bar{\mathbf{d}}_2| = |\bar{\mathbf{D}}_2|$
2. **切向剪切**（director 与切线的垂直性）：$\mathbf{d}_\alpha\cdot\mathbf{d}_3 = \mathbf{D}_\alpha\cdot\mathbf{D}_3$
3. **法向剪切**（截面畸变）：$\bar{\mathbf{d}}_1\cdot\bar{\mathbf{d}}_2/(|\bar{\mathbf{d}}_1||\bar{\mathbf{d}}_2|) = \bar{\mathbf{D}}_1\cdot\bar{\mathbf{D}}_2/(|\bar{\mathbf{D}}_1||\bar{\mathbf{D}}_2|)$

速率形式的约束方程（例如切向剪切）$[\text{Naghdi–Rubin 1984, Eq 3.16}]$：

$$
\mathbf{d}_\alpha\cdot\frac{\partial\mathbf{v}}{\partial\xi} + \mathbf{d}_3\cdot\mathbf{w}_\alpha = 0.
$$

Lagrange 乘子形式：将应力分解为确定部分 $\hat{(\cdot)}$ 和乘子部分 $\bar{(\cdot)}$：

$$
\mathbf{n} = \hat{\mathbf{n}} + \bar{\mathbf{n}},\quad
\mathbf{k}^\alpha = \hat{\mathbf{k}}^\alpha + \bar{\mathbf{k}}^\alpha,\quad
\mathbf{m}^\alpha = \hat{\mathbf{m}}^\alpha + \bar{\mathbf{m}}^\alpha,
$$

$$
\bar{\mathbf{n}} = -\sum_{M=0}^N \mathbf{A}^M p_M,\quad
\bar{\mathbf{k}}^\alpha = -\sum_{M=0}^N \mathbf{B}^{M\alpha} p_M,\quad
\bar{\mathbf{m}}^\alpha = -\sum_{M=0}^N \mathbf{C}^{M\alpha} p_M.
$$

**Bernoulli–Euler 约束理论**（抑制全部三类变形）：

$$
\bar{\mathbf{n}} = -p^{\alpha3}\mathbf{d}_\alpha,\quad
\bar{\mathbf{k}}^\alpha = -p^{(\alpha\beta)}\mathbf{d}_\beta - p^{\alpha3}\mathbf{d}_3,\quad
\bar{\mathbf{m}}^\alpha = 0.
$$

乘子 $p^{\alpha\beta}, p^{\alpha3}$ 由平衡方程确定，非本构部分。

#### 4.3.3 Cross-Sectional Stretch Effects (Naghdi–Rubin 1989)

1989 的论文在 Bernoulli–Euler 约束基础上引入横截面法向伸缩，允许 $\gamma_{11},\gamma_{22}\neq0$。对于等截面梁：

本构系数 $[\text{Naghdi–Rubin 1989, Eqs 17–21}]$：

$$
\alpha_1 = \alpha_2 = \alpha_3 = \frac{E h w (1-\nu)}{(1+\nu)(1-2\nu)},\quad
\alpha_7 = \alpha_8 = \alpha_9 = \frac{\nu\alpha_1}{1-\nu},
$$

$$
\alpha_6 = \frac56\mu h w,\quad
\alpha_{16} = \frac{E h^3 w}{12}.
$$

控制方程出现四阶微分算子 $[\text{Naghdi–Rubin 1989, Eq 35}]$：

$$
\frac{\mathrm{d}^4\bar{\delta}_{13}}{\mathrm{d}z^4} - 2b^2\frac{\mathrm{d}^2\bar{\delta}_{13}}{\mathrm{d}z^2} + a^4\bar{\delta}_{13} = 0,
$$

其中 $a^4 = 4\alpha/(h^2\alpha_{16})$，$b^2 = 2\alpha/(h^2\alpha_6)$。这一理论能够预测接触问题中半无限长梁的边界层效应（St. Venant 原理的厚度相关修正）。

### 4.4 Thermo-Electro-Magnetic Coupling

Green–Naghdi (1979, 1985) 将电磁相互作用纳入 Cosserat 理论。3D 能量方程增加电磁功率项 $[\text{Green–Naghdi 1985, Eq A.2}]$：

$$
\rho^* r^* - \mathrm{div}^*\mathbf{q}^* - \rho^*\dot{\epsilon}^* + \rho^* w_{\mathrm{e}}^* + \mathbf{T}\cdot\mathbf{L}^* + \tfrac12\rho^*\boldsymbol{\Gamma}_{\mathrm{e}}^*\cdot\mathbf{L}^* = 0,
$$

其中电磁功率展开为：

$$
\rho^*w_{\mathrm{e}}^* + \tfrac12\rho^*\boldsymbol{\Gamma}_{\mathrm{e}}^*\cdot\mathbf{L}^* = \mathbf{T}_{\mathrm{e}}\cdot\mathbf{L}^* + \mathbf{e}^*\cdot\mathbf{j}^* + \mathbf{e}^*\cdot(\dot{\bar{\mathbf{d}}} + \bar{\mathbf{d}}\,\mathrm{div}^*\mathbf{v}^* - \mathbf{L}^*\bar{\mathbf{d}}) + \mathbf{h}^*\cdot(\dot{\mathbf{b}} + \mathbf{b}\,\mathrm{div}^*\mathbf{v}^* - \mathbf{L}^*\mathbf{b}).
$$

$\mathbf{e}^*\cdot\mathbf{j}^*$ 即为电磁焦耳热。**Maxwell 方程**作为辅助场方程加入：

$$
\mathrm{curl}^*\mathbf{e}^* = -(\dot{\mathbf{b}} + \mathbf{b}\,\mathrm{div}^*\mathbf{v}^* - \mathbf{L}^*\mathbf{b}),\quad
\mathrm{div}^*\mathbf{b} = 0,
$$

$$
\mathrm{curl}^*\mathbf{h}^* = \mathbf{j}^* + \dot{\bar{\mathbf{d}}} + \bar{\mathbf{d}}\,\mathrm{div}^*\mathbf{v}^* - \mathbf{L}^*\bar{\mathbf{d}},\quad
\mathrm{div}^*\bar{\mathbf{d}} = e.
$$

力方程中加入 **Lorentz 力** $\rho_e\mathbf{E} + \mathbf{J}\times\mathbf{B}$。自由能扩展为：

$$
\psi = \psi_2(T, \gamma_{ij}, \kappa_{\alpha i}, \tilde{\mathbf{E}}_{MN}, \tilde{\mathbf{H}}_{MN}).
$$

电磁本构由自由能导出 $[\text{Green–Naghdi 1985, Eq 4.12}]$：

$$
\hat{D}^i_{MN} = -\lambda\frac{\partial\psi_2}{\partial\tilde{E}_{MNi}},\qquad
B^i_{MN} = -\lambda\frac{\partial\psi_2}{\partial\tilde{H}_{MNi}}.
$$

### 4.5 Numerical Methods (Cosserat Point Approach)

Rubin (2001) 将 Cosserat 杆理论的每个节点视为一个 **Cosserat 点**，具有 6 个 director 变量 $\boldsymbol{d}_i$（$i=0,1,\dots,5$）：

$$
\boldsymbol{d}_0 = \mathbf{r}_0,\quad \boldsymbol{d}_1 = \mathbf{d}_{1},\quad \boldsymbol{d}_2 = \mathbf{d}_{2},\quad
\boldsymbol{d}_3 = L^{-1}(\mathbf{r}_2-\mathbf{r}_1),\quad \boldsymbol{d}_4 = L^{-1}(\mathbf{d}_{12}-\mathbf{d}_{11}),\quad \boldsymbol{d}_5 = L^{-1}(\mathbf{d}_{22}-\mathbf{d}_{21}).
$$

**平衡方程** $[\text{Rubin 2001, Eq 5b}]$：

$$
\frac{\mathrm{d}}{\mathrm{d}t}\Bigl[\sum_{j=0}^5 m y^{ij}\boldsymbol{w}_j\Bigr] = m\boldsymbol{b}^i - \boldsymbol{t}^i,
$$

其中 $\boldsymbol{w}_j = \dot{\boldsymbol{d}}_j$，$y^{ij}$ 为惯性系数，$\boldsymbol{b}^i$ 为体力，$\boldsymbol{t}^i$ 为接触力。**角动量守恒**要求：

$$
\sum_{i=1}^5 \boldsymbol{d}_i\times\boldsymbol{t}^i = 0.
$$

**变形度量**：$\boldsymbol{F} = \sum_{i=1}^3 \boldsymbol{d}_i\otimes\boldsymbol{D}^i$，$J = \det\boldsymbol{F}$；非均匀变形 $\boldsymbol{\beta}_1 = \boldsymbol{F}^{-1}\boldsymbol{d}_4 - \boldsymbol{D}_4$，$\boldsymbol{\beta}_2 = \boldsymbol{F}^{-1}\boldsymbol{d}_5 - \boldsymbol{D}_5$。

**时间积分**：Newmark-$\beta$ 方法，公式为：

$$
\boldsymbol{d}_{n+1} = \boldsymbol{d}_n + \Delta t\,\boldsymbol{v}_n + \Delta t^2\bigl[(\tfrac12-\beta)\boldsymbol{a}_n + \beta\boldsymbol{a}_{n+1}\bigr],
$$

$$
\boldsymbol{v}_{n+1} = \boldsymbol{v}_n + \Delta t\bigl[(1-\gamma)\boldsymbol{a}_n + \gamma\boldsymbol{a}_{n+1}\bigr].
$$

**空间离散**：相邻 Cosserat 点连接时，共享端节点变量 $\boldsymbol{d}_0,\boldsymbol{d}_1,\boldsymbol{d}_2$，力平衡条件为：

$$
_{I-1}\boldsymbol{m}_2^i + {}_I\boldsymbol{m}_1^i = 0\quad\text{for } I=2,3,\dots,N,\; i=0,1,2.
$$

**非线性求解**：Newton–Raphson 迭代，在每个时间步求解：

$$
\mathbf{K}\,\Delta\mathbf{x} = -\mathbf{R},
$$

其中 $\mathbf{R}$ 为残差向量（平衡方程 + 本构关系），$\mathbf{K}$ 为切线刚度矩阵。

**约束条件处理**：

- **乘子法**：在能量泛函中引入 Lagrange 乘子 $p_M$：
  $$
  \bar{\mathbf{n}} = -\sum\mathbf{A}^M p_M,\quad \bar{\mathbf{k}}^\alpha = -\sum\mathbf{B}^{M\alpha}p_M,\quad \bar{\mathbf{m}}^\alpha = -\sum\mathbf{C}^{M\alpha}p_M.
  $$
- **罚函数法**：在能量中加入 $\tfrac12\epsilon(\text{constraint})^2$，$\epsilon\to\infty$ 时逼近约束

### 4.6 Comparison Summary of Theories

| 方面       | 直接 Cosserat 理论                                                                      | 3D 约化截断理论                                                 | 经典工程理论                              |
| ---------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------- |
| 运动学变量 | $\mathbf{r}, \mathbf{d}_\alpha$（杆）或 $\mathbf{r}, \mathbf{d}$（壳）              | 无穷级数$\mathbf{d}_{\alpha_1\ldots\alpha_n}$，截断至 $n=1$ | $\mathbf{r}$（位移）                    |
| 应变度量   | $a_{ij}, \kappa_{\alpha i}$（杆）或 $a_{\alpha\beta}, \lambda_{i\alpha}, d_i$（壳） | $\gamma_{ij}, \sigma_{\alpha i}$（3D 应变积分）               | $\varepsilon_{xx}, \gamma_{xy}, \kappa$ |
| 本构系数   | 自由参数（需实验或 3D 识别）                                                            | 由 3D 弹性常数的截面积分确定                                    | $E, G, I, J, \kappa$                    |
| 剪切变形   | 自然包含                                                                                | 自然包含                                                        | 需引入剪切修正系数                        |
| 横截面变形 | 自然包含（通过$\mathbf{d}_\alpha$ 的伸缩与剪切）                                      | 仅当$N\ge2$ 时出现                                            | 通常忽略                                  |
| 推导方法   | 积分平衡律 + 不变性                                                                     | 3D 平衡律 + 级数展开 + 截断                                     | 直接假设运动学 + 变分法                   |

> **总结 4.1**
>
> - Green–Laws–Naghdi 级数展开法建立了 3D 弹性力学与直接 Cosserat 理论的精确联系
> - Gibbs 函数法可将圆截面杆的弹性系数显式表示为 $E,\nu$ 和截面几何的函数
> - 四个独立模态（F1、F2、E、T）对应 Timoshenko 梁的弯曲（两平面）、拉伸和扭转
> - 约束理论通过 Lagrange 乘子抑制特定变形模式，乘子部分由平衡方程确定
> - 电磁耦合框架将 Maxwell 方程和 Lorentz 力纳入 Cosserat 理论
> - Cosserat 点方法提供系统化的计算框架：Newmark-$\beta$ 时间积分 + Newton–Raphson 迭代

### 4.7 Complete Comparison Table of Rod, Plate, and Shell Governing Equations

以下以统一符号系统对比三种理论的最终控制方程。所有符号定义见第二、三部分。

| 对比项                           | Cosserat 杆（定向曲线）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Cosserat 板/壳（定向曲面）                                                                                                                                                                   |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **运动学变量**             | $\mathbf{r}(\theta,t)$, $\mathbf{d}_\alpha(\theta,t)$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | $\mathbf{r}(\theta^\alpha,t)$, $\mathbf{d}(\theta^\alpha,t)$                                                                                                                             |
| **基矢量**                 | $\mathbf{a}_\alpha = \mathbf{d}_\alpha$, $\mathbf{a}_3 = \mathbf{r}_{,\theta}$                                                                                                                                                                                                                                                                                                                                                                                                                                                              | $\mathbf{a}_\alpha = \mathbf{r}_{,\alpha}$, $\mathbf{a}_3 = \mathbf{d}$                                                                                                                  |
| **速度**                   | $\mathbf{v} = \dot{\mathbf{r}}$, $\mathbf{w}_\alpha = \dot{\mathbf{d}}_\alpha$                                                                                                                                                                                                                                                                                                                                                                                                                                                              | $\mathbf{v} = \dot{\mathbf{r}}$, $\mathbf{w} = \dot{\mathbf{d}}$                                                                                                                         |
| **变形率**                 | $\eta_{ki} = \mathbf{a}_{(k}\cdot\dot{\mathbf{a}}_{i)}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | $\eta_{\alpha\beta} = \mathbf{a}_{(\alpha}\cdot\dot{\mathbf{a}}_{\beta)}$                                                                                                                  |
| **应变度量**               | $\gamma_{ij} = a_{ij}-A_{ij}$, $\sigma_{\alpha i} = \kappa_{\alpha i}-K_{\alpha i}$                                                                                                                                                                                                                                                                                                                                                                                                                                                         | $e_{\alpha\beta} = \tfrac12(a_{\alpha\beta}-A_{\alpha\beta})$, $\kappa_{i\alpha} = \lambda_{i\alpha}-\Lambda_{i\alpha}$, $\delta_i = d_i-D_i$                                          |
| **质量守恒**               | $\dot{\rho} + \rho\,\dfrac{\dot{a}_{33}}{2a_{33}} = 0$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | $\dfrac{\mathrm{D}\rho}{\mathrm{D}t} + \rho(v^\alpha_{\vert\alpha} - b^\alpha_\alpha v_3) = 0$                                                                                             |
| **线动量方程**             | $\dfrac{1}{\sqrt{a_{33}}}\dfrac{\partial\mathbf{n}}{\partial\theta} + \rho\mathbf{f} = \rho\dot{\mathbf{v}}$                                                                                                                                                                                                                                                                                                                                                                                                                                  | $\mathbf{N}^\alpha_{\vert\alpha} + \rho\mathbf{F} = \rho\dot{\mathbf{v}}$                                                                                                                  |
| **线动量（分量形式）**     | $\dfrac{1}{\sqrt{a_{33}}}\dfrac{\delta n^i}{\delta\theta} + \rho f^i = \rho c^i$                                                                                                                                                                                                                                                                                                                                                                                                                                                              | $N^{\beta\alpha}_{\vert\alpha} - b^\beta_\alpha N^{3\alpha} + \rho F^\beta = \rho c^\beta$, $N^{3\alpha}_{\vert\alpha} + b_{\alpha\beta}N^{\beta\alpha} + \rho F^3 = \rho c^3$           |
| **角动量方程**             | $\dfrac{1}{\sqrt{a_{33}}}\dfrac{\partial\mathbf{m}}{\partial\theta} + \dfrac{1}{\sqrt{a_{33}}}\mathbf{a}_3\times\mathbf{n} + \rho\dot{\mathbf{g}} = \mathbf{0}$, $\mathbf{m} = \mathbf{a}_\alpha\times\mathbf{p}^\alpha$, $\dot{\mathbf{g}} = \mathbf{a}_\alpha\times\mathbf{q}^\alpha$                                                                                                                                                                                                                                                   | $\mathbf{N}^\alpha\times\mathbf{a}_\alpha + (\mathbf{M}^\alpha\times\mathbf{d})_{\vert\alpha} + \rho\bar{\mathbf{L}}\times\mathbf{d} = \mathbf{0}$                                         |
| **对称性条件**             | $\pi^{[\alpha\beta]} + \tfrac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha} - p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) = 0$                                                                                                                                                                                                                                                                                                                                                                                                | $\varepsilon_{\beta\alpha}[N^{\beta\alpha} + m^\beta d^\alpha + M^{\beta\gamma}\lambda_{\,.\gamma}^\alpha] = 0$                                                                            |
| **有效应力**               | $-$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | $N'^{\alpha\beta} = N^{\beta\alpha} - m^\alpha d^\beta - M^{\alpha\gamma}\lambda_{\,.\gamma}^\beta$                                                                                        |
| **约化能量方程**           | $-\rho\dot{U} + \rho r + \eta_{k\alpha}\pi^\alpha\cdot\mathbf{a}^k + \frac{1}{\sqrt{a_{33}}}(\dot{\kappa}_{\alpha k} - \eta_{kj}\kappa_\alpha^{\cdot j})\mathbf{p}^\alpha\cdot\mathbf{a}^k + \frac{1}{\sqrt{a_{33}}}\eta_{k3}\mathbf{n}\cdot\mathbf{a}^k - \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0$                                                                                                                                                                                                                      | $\rho r - q^\alpha_{\vert\alpha} - \rho\dot{U} + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} = 0$                                               |
| **Clausius–Duhem 不等式** | $-\rho(\dot{A}+\dot{T}S) + [\pi^{(\alpha\beta)}-\frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta})]\eta_{\alpha\beta} + \frac{2}{\sqrt{a_{33}}}(n^\beta-p^{\alpha3}\kappa_\alpha^{\cdot\beta})\eta_{\beta3} + \frac{1}{\sqrt{a_{33}}}(n^3-p^{\alpha3}\kappa_\alpha^{\cdot3})\eta_{33} + \frac{1}{\sqrt{a_{33}}}p^{\alpha i}\dot{\kappa}_{\alpha i} - \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0$                                                  | $-\rho(\dot{A}+\dot{T}S) + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0$                                  |
| **自由能变量**             | $A(T, \gamma_{ij}, \sigma_{\alpha i})$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | $A(T, e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i)$                                                                                                                                        |
| **熵状态方程**             | $S = -\dfrac{\partial A}{\partial T}$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | $S = -\dfrac{\partial A}{\partial T}$                                                                                                                                                      |
| **应力本构**               | $\frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3}) = 2\rho\frac{\partial A}{\partial\gamma_{33}}$, $\frac{1}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta}) = \rho\frac{\partial A}{\partial\gamma_{\beta3}}$, $\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) = 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}}$, $\frac{1}{\sqrt{a_{33}}}p^{\alpha i} = \rho\frac{\partial A}{\partial\sigma_{\alpha i}}$ | $N'^{\beta\alpha} = \rho\frac{\partial A}{\partial e_{\alpha\beta}}$, $m^i = \rho\frac{\partial A}{\partial\delta_i}$, $M^{i\alpha} = \rho\frac{\partial A}{\partial\kappa_{i\alpha}}$ |
| **热传导不等式**           | $-h\,\dfrac{\partial T}{\partial\theta} \ge 0$                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | $-q^\alpha T_{,\alpha} \ge 0$                                                                                                                                                              |
| **残余热方程**             | $\rho r - \rho T\dot{S} - \dfrac{1}{\sqrt{a_{33}}}\dfrac{\partial h}{\partial\theta} = 0$                                                                                                                                                                                                                                                                                                                                                                                                                                                     | $\rho r - \rho T\dot{S} + q^\alpha_{\vert\alpha} = 0$                                                                                                                                      |
| **边界条件类型**           | 端部：指定$\mathbf{n}$ 或 $\mathbf{r}$；指定 $\mathbf{p}^\alpha$ 或 $\mathbf{d}_\alpha$；指定 $h$ 或 $T$                                                                                                                                                                                                                                                                                                                                                                                                                            | 边界：指定$\mathbf{N}^\alpha\nu_\alpha$ 或 $\mathbf{r}$；指定 $\mathbf{M}^\alpha\nu_\alpha$ 或 $\mathbf{d}$；指定 $h$ 或 $T$                                                     |
| **特例**                   | Kirchhoff 杆（不可伸长+不可剪切），Euler 弹性线                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Kirchhoff–Love（$\mathbf{d}=\mathbf{a}_3$），Reissner–Mindlin，薄膜                                                                                                                      |

**结构同源性说明**：两种理论的推导链完全平行——均为"积分能量平衡 → 平动不变性 → 线动量 → 转动不变性 → 角动量 → 约化能量 → Clausius–Duhem → 本构"。区别源于几何维度的不同：杆为 1D（一个曲线坐标 $\theta$ 加两个 director），壳为 2D（两个曲面坐标 $\theta^\alpha$ 加一个 director）。面内指标 $\alpha,\beta$ 在杆中为 $\{1,2\}$（两个 director 方向），在壳中也同为 $\{1,2\}$（两个切线方向）。杆的 $i,j=3$ 对应切线方向 $\mathbf{a}_3 = \mathbf{r}_{,\theta}$，壳的 $i=3$ 对应法向 $\mathbf{a}_3 = \mathbf{d}$。若将杆的 $\mathbf{a}_3$ 重新解释为法向、$\mathbf{d}_1,\mathbf{d}_2$ 重新解释为切向基，则两种理论在形式上可完全统一。


## Part 5 — Reduction from General to Classical Theories

The Cosserat theories developed in Parts 2–4 are the most general rod/plate/shell models, encompassing all 6 (rod) or 8 (shell) independent deformation modes. In engineering practice, however, simplified classical theories are used when the problem scale and accuracy requirements permit specific kinematic assumptions. This part systematically derives these classical theories from the general Cosserat framework by imposing constraints on the kinematics and linearizing the strain measures, maintaining full consistency with the notation established in the preceding parts.

### 5.1 Rod Reduction: Cosserat → Kirchhoff → Euler

#### 5.1.1 The Kirchhoff Rod: Inextensible and Unshearable

Recall from Part 2 that a Cosserat rod is described by $\mathbf{r}(\theta,t)$ and $\mathbf{d}_\alpha(\theta,t)$, with basis vectors $\mathbf{a}_\alpha = \mathbf{d}_\alpha$, $\mathbf{a}_3 = \mathbf{r}_{,\theta}$, and strain measures $\gamma_{ij} = a_{ij}-A_{ij}$ and $\sigma_{\alpha i} = \kappa_{\alpha i}-K_{\alpha i}$.

The Kirchhoff rod imposes two kinematic constraints:

$$
\gamma_{33}=0 \quad\text{(inextensibility)},\qquad \gamma_{13}=\gamma_{23}=0 \quad\text{(unshearability)}.
\tag{5.1}
$$

Taking the reference configuration as the natural state ($A_{ij}=\delta_{ij}$, $K_{\alpha i}=0$), these imply $a_{33}=1$ and $a_{\alpha 3}=0$: $\mathbf{a}_3$ is a unit vector orthogonal to $\mathbf{a}_1,\mathbf{a}_2$. Hence $\mathbf{a}_3$ coincides with the unit tangent $\mathbf{t}$ of the curve $\mathbf{r}(\theta)$ (the Frenet frame of §1.1).

**Strain reduction**: All six $\gamma_{ij}$ vanish, and of the six $\kappa_{\alpha i}$, only three curvature/twist components remain independent:

$$
\kappa_{13} \approx \kappa_1,\quad \kappa_{23} \approx \kappa_2,\quad \omega \equiv \tfrac12(\kappa_{12}-\kappa_{21}) \approx \tau,
\tag{5.2}
$$

where $\kappa_1,\kappa_2$ are bending curvatures in the two principal directions and $\tau$ is the twist rate. The components $\kappa_{11},\kappa_{22}$ are not independent (they are determined by compatibility with $\gamma_{\alpha\beta}=0$), and neither is $\kappa_{12}+\kappa_{21}$.

**Constraint treatment via Lagrange multipliers**: Following the constraint theory of §4.3, multipliers $\bar{n}^i$ decompose the contact force into determinate and reactive parts:

$$
\mathbf{n} = \hat{\mathbf{n}} + \bar{\mathbf{n}},\qquad
\bar{\mathbf{n}} = -\bar{n}^i\mathbf{a}_i,
\tag{5.3}
$$

where $\hat{\mathbf{n}}$ is given by the constitutive law (zero in the Kirchhoff rod since $\partial A/\partial\gamma_{ij}=0$ when $\gamma_{ij}=0$), and $\bar{\mathbf{n}}$ is determined by the balance equations. Physically, $\bar{\mathbf{n}}$ comprises the constraint reactions—the shear forces and axial force of the classical Kirchhoff rod.

**Elastic constitutive law**: The free energy $A$ depends only on the curvature changes $\kappa_{\alpha i}$. For a linearly elastic isotropic rod, retaining quadratic terms gives:

$$
\rho A = \tfrac12 EI_1 \kappa_{13}^2 + \tfrac12 EI_2 \kappa_{23}^2 + \tfrac12 GJ \,\omega^2,
\tag{5.4}
$$

where $EI_1, EI_2$ are the principal bending stiffnesses and $GJ$ the torsional stiffness. The moment–curvature relations are:

$$
p^{13} = \sqrt{a_{33}}\,\rho\frac{\partial A}{\partial\kappa_{13}} = EI_1\kappa_{13},\quad
p^{23} = \sqrt{a_{33}}\,\rho\frac{\partial A}{\partial\kappa_{23}} = EI_2\kappa_{23},\quad
\tfrac12(p^{12}-p^{21}) = GJ\,\omega.
\tag{5.5}
$$

**Equilibrium equations**: In the static, body-force-free case, the linear and angular momentum equations from Part 2 reduce to:

$$
\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{n}}{\partial\theta} = \mathbf{0},\qquad
\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{m}}{\partial\theta} + \frac{1}{\sqrt{a_{33}}}\mathbf{a}_3\times\mathbf{n} = \mathbf{0},
\tag{5.6}
$$

where $\mathbf{m} = \mathbf{a}_\alpha\times\mathbf{p}^\alpha$ is the resultant moment vector. Switching to arc length $s$ ($\mathrm{d}s = \sqrt{a_{33}}\,\mathrm{d}\theta$) yields the classical Kirchhoff rod equilibrium equations:

$$
\frac{\mathrm{d}\mathbf{n}}{\mathrm{d}s} = \mathbf{0},\qquad
\frac{\mathrm{d}\mathbf{m}}{\mathrm{d}s} + \mathbf{t}\times\mathbf{n} = \mathbf{0}.
\tag{5.7}
$$

Projecting $\mathbf{n}$ and $\mathbf{m}$ onto the Frenet frame $\{\mathbf{t},\mathbf{n},\mathbf{b}\}$ (introduced in §1.1), writing $\mathbf{n} = F_t\mathbf{t} + F_n\mathbf{n} + F_b\mathbf{b}$ and $\mathbf{m} = M_t\mathbf{t} + M_n\mathbf{n} + M_b\mathbf{b}$, and using the Frenet–Serret formulas (1.1) to expand (5.7), we obtain the **Kirchhoff rod frame equations**:

$$
\begin{aligned}
\frac{\mathrm{d}F_t}{\mathrm{d}s} - \kappa F_n &= 0,\\
\frac{\mathrm{d}F_n}{\mathrm{d}s} + \kappa F_t - \tau F_b &= 0,\\
\frac{\mathrm{d}F_b}{\mathrm{d}s} + \tau F_n &= 0,\\
\frac{\mathrm{d}M_t}{\mathrm{d}s} - \kappa M_n &= 0,\\
\frac{\mathrm{d}M_n}{\mathrm{d}s} + \kappa M_t - \tau M_b - F_b &= 0,\\
\frac{\mathrm{d}M_b}{\mathrm{d}s} + \tau M_n + F_n &= 0.
\end{aligned}
\tag{5.8}
$$

This system, due to Kirchhoff (1859), is the cornerstone of large-deformation slender rod theory. Together with the constitutive relations (5.5) and known $\kappa(s), \tau(s)$, it forms a closed first-order ODE system for the six force/moment components.

#### 5.1.2 Euler Elastica: Straight Rod, Planar Bending

When the Kirchhoff rod is further restricted to a **straight reference configuration** (zero initial curvature and twist) and **planar deformation**, it reduces to the Euler elastica. Here $\tau=0$, $F_b=0$, $M_n=0$, and only the in-plane curvature $\kappa$ remains. The equilibrium equations (5.8) simplify to three components:

$$
\frac{\mathrm{d}F_t}{\mathrm{d}s} = \kappa F_n,\qquad
\frac{\mathrm{d}F_n}{\mathrm{d}s} = -\kappa F_t,\qquad
\frac{\mathrm{d}M_b}{\mathrm{d}s} = -F_n.
\tag{5.9}
$$

The simplest derivation bypasses these force component equations and instead uses direct moment equilibrium. For a slender rod subjected to a compressive end load $P$, the bending moment at arc length $s$ equals $P$ times the lever arm $y(s)$:

$$
M_b(s) = P\,y(s),\qquad y(s) = \int_0^s \sin\phi(\xi)\,\mathrm{d}\xi,
\tag{5.10}
$$

where $\phi(s)$ is the tangent angle ($\kappa = \mathrm{d}\phi/\mathrm{d}s$) and $y(s)$ is the transverse deflection. Substituting $M_b = EI\kappa$ from (5.5) and differentiating with respect to $s$ yields:

$$
EI\frac{\mathrm{d}\phi}{\mathrm{d}s} = P\int_0^s \sin\phi(\xi)\,\mathrm{d}\xi
\quad\Longrightarrow\quad
EI\frac{\mathrm{d}^2\phi}{\mathrm{d}s^2} = P\sin\phi.
\tag{5.11}
$$

With the sign convention for axial compression ($P > 0$), the governing equation takes its standard form:

$$
EI\frac{\mathrm{d}^2\phi}{\mathrm{d}s^2} + P\sin\phi = 0.
\tag{5.12}
$$

Multiplying by $\mathrm{d}\phi/\mathrm{d}s$ and integrating once gives the first integral:

$$
\tfrac12 EI\Bigl(\frac{\mathrm{d}\phi}{\mathrm{d}s}\Bigr)^2 - P\cos\phi = C,
\tag{5.13}
$$

which can be solved exactly in terms of elliptic integrals $[\text{Love 1927, §262}]$. The constant $C$ is determined by boundary conditions (e.g., $C = -P\cos\phi_0$ at a clamped end where $\phi = \phi_0$ is known).

When $\phi \ll 1$, $\sin\phi \approx \phi$, and (5.12) linearizes to $EI\,\phi_{,ss} + P\phi = 0$. For a pin-ended column with boundary conditions $\phi_{,s}(0)=\phi_{,s}(L)=0$, the eigenvalues are $P_n = n^2\pi^2 EI/L^2$, giving the classical critical buckling load $P_{\mathrm{cr}} = \pi^2 EI/L^2$.

> **Note**: The Euler elastica (1744) is the earliest geometrically nonlinear elastic theory. From the Cosserat rod perspective, it adds the constraints of planarity and straight reference to the Kirchhoff rod, retaining a single curvature degree of freedom $\kappa$ while fully capturing large-rotation nonlinearity through $\phi(s)$.

#### 5.1.3 Timoshenko Beam: Linearization with Shear Deformation

The Timoshenko beam retains the shear strains $\gamma_{\alpha 3}$ that the Kirchhoff rod neglects, but assumes small enough deformations to permit linearization. Its derivation via Green's Gibbs function method appears in §4.1.3; here we obtain it directly by linearizing the Cosserat rod equations.

Under the **small-deformation** assumption, expand $\mathbf{n}$ and $\mathbf{p}^\alpha$ about the reference basis, neglecting the difference between $a_{ij}$ and $\delta_{ij}$ and higher-order terms in $\kappa_{\alpha i}$. The linear and angular momentum equations (5.6) become (along $\theta$, body forces omitted):

$$
\frac{\partial n^i}{\partial\theta} = 0,\qquad
\frac{\partial m^i}{\partial\theta} - \varepsilon^{i3j}n_j = 0,
\tag{5.14}
$$

where $m^i$ are the components of the resultant moment $\mathbf{m} = m^i\mathbf{a}_i$ (in the reference configuration, $m^1 \approx -p^{23}$, $m^2 \approx p^{13}$, $m^3 = 0$) and $\varepsilon^{ijk}$ is the permutation symbol.

Introducing engineering displacements and rotations: let $u_\alpha(\theta)$ be the transverse displacements and $\phi_\alpha(\theta)$ the cross-sectional rotations. Linearizing the kinematic relations gives:

$$
\gamma_{\alpha 3} = u_{\alpha,\theta} + \phi_\alpha,\qquad
\kappa_{\alpha 3} = \phi_{\alpha,\theta}.
\tag{5.15}
$$

The linear elastic constitutive law (linearization of (2.10)) reads:

$$
n^\alpha = \mu S\kappa_s\,\gamma_{\alpha 3},\qquad
p^{\alpha 3} = EI\,\kappa_{\alpha 3}.
\tag{5.16}
$$

The shear correction factor $\kappa_s = 6(1+\nu)^2/(7+14\nu+8\nu^2)$ (for a circular cross-section) was derived exactly from the Gibbs function method in §4.1.3. Substituting into the balance equations yields the coupled second-order system:

$$
\begin{aligned}
\mu S\kappa_s\,(u_{\alpha,\theta} + \phi_\alpha)_{,\theta} &= 0,\\
EI\,\phi_{\alpha,\theta\theta} - \mu S\kappa_s\,(u_{\alpha,\theta} + \phi_\alpha) &= 0.
\end{aligned}
\tag{5.17}
$$

Eliminating $\phi_\alpha$ recovers the fourth-order equation $EI\,u_{\alpha,\theta\theta\theta\theta}=0$, identical in form to the Bernoulli–Euler beam. The distinction lies in the range of validity: when the slenderness ratio $L/h \lesssim 10$ or for high-frequency vibrations, the coupled Timoshenko form (5.15) must be used to correctly account for shear deformation and rotary inertia.

### 5.2 Plate Reduction: Cosserat → von Kármán → Kirchhoff-Love

#### 5.2.1 The von Kármán Plate: Normal Hypothesis with Moderate Deflections

Recall from Part 3 that a Cosserat plate/shell is described by $\mathbf{r}(\theta^\alpha,t)$ and $\mathbf{d}(\theta^\alpha,t)$, with basis vectors $\mathbf{a}_\alpha = \mathbf{r}_{,\alpha}$, $\mathbf{a}_3 = \mathbf{d}$, and strain measures $e_{\alpha\beta} = \tfrac12(a_{\alpha\beta}-A_{\alpha\beta})$, $\delta_i = d_i - D_i$, $\kappa_{i\alpha} = \lambda_{i\alpha} - \Lambda_{i\alpha}$.

The von Kármán plate imposes the **normal hypothesis**: $\mathbf{d} = \mathbf{a}_3$, meaning the deformed normal remains normal and of unit length. In strain measures:

$$
\delta_\alpha = d_\alpha - D_\alpha = 0,\qquad
\delta_3 = |\mathbf{d}| - |\mathbf{D}| = 0.
\tag{5.18}
$$

However, **moderately large deflections** ($w \sim h$, where $h$ is the plate thickness) are permitted, so the membrane strain $e_{\alpha\beta}$ retains quadratic terms in the rotation. Introduce the mid-surface displacement field:

$$
\mathbf{r}(\theta^\alpha) = \mathbf{r}_0(\theta^\alpha) + u^\beta\mathbf{a}_\beta + w\mathbf{n},
\tag{5.19}
$$

where $\mathbf{n}$ is the initial unit normal. For an initially flat plate ($A_{\alpha\beta}=\delta_{\alpha\beta}$, $b_{\alpha\beta}=0$), in Cartesian coordinates $e_{\alpha\beta}$ expanded to $O(w^2)$ is:

$$
e_{\alpha\beta} = \tfrac12(u_{\alpha,\beta} + u_{\beta,\alpha}) + \tfrac12 w_{,\alpha}w_{,\beta},
\tag{5.20}
$$

and the curvature change is:

$$
\kappa_{\alpha\beta} \equiv \kappa_{3\alpha}|_{\mathbf{d}=\mathbf{a}_3} = -w_{,\alpha\beta}.
\tag{5.21}
$$

The quadratic term $w_{,\alpha}w_{,\beta}$ in (5.18) is the hallmark of von Kármán theory: transverse deflections of moderate amplitude stretch the mid-surface, generating in-plane membrane forces that feed back into the bending response, producing a nonlinear load–deflection relation.

**Constitutive law** (isotropic linear elastic plate):

$$
\begin{aligned}
N'^{\beta\alpha} &= \frac{Eh}{1-\nu^2}\bigl[(1-\nu)e^{\beta\alpha} + \nu e^{\gamma}_{\;\gamma}\delta^{\beta\alpha}\bigr],\\[2mm]
M^{\beta\alpha} &= D\bigl[(1-\nu)\kappa^{\beta\alpha} + \nu\kappa^{\gamma}_{\;\gamma}\delta^{\beta\alpha}\bigr],\quad D = \frac{Eh^3}{12(1-\nu^2)}.
\end{aligned}
\tag{5.22}
$$

**The von Kármán equations**: Introducing the Airy stress function $\Phi$ (such that $N'^{\beta\alpha} = \varepsilon^{\beta\gamma}\varepsilon^{\alpha\delta}\Phi_{,\gamma\delta}$), the equilibrium equations reduce to two coupled fourth-order PDEs:

$$
D\nabla^4 w = q + [\Phi, w],\qquad
\frac{1}{Eh}\nabla^4 \Phi = -\tfrac12[w, w],
\tag{5.23}
$$

where $[\cdot,\cdot]$ is the Monge-Ampère bracket:

$$
[f, g] = f_{,xx}g_{,yy} + f_{,yy}g_{,xx} - 2f_{,xy}g_{,xy}.
\tag{5.24}
$$

System (5.21) captures the essence of von Kármán plate theory: the first equation describes bending under the combined action of transverse load and membrane forces, while the second governs the membrane response driven by geometric nonlinearity. The two equations are strongly coupled through $[\Phi,w]$ and $[w,w]$.

> **Applicability**: $w \sim h$ (deflection comparable to thickness), $w/L \lesssim 0.1$. When $w \ll h$, the theory reduces to the linear Kirchhoff–Love plate (§5.2.2); when $w \gg h$, bending stiffness becomes negligible and the membrane theory of §3.7 applies.

#### 5.2.2 Kirchhoff–Love Plate: Small-Deflection Linearization

When the deflection is much smaller than the thickness ($w \ll h$), the quadratic term in (5.18) can be neglected, decoupling in-plane and bending deformations. The governing equation reduces to the biharmonic equation:

$$
D\nabla^4 w = q,
\tag{5.25}
$$

the fundamental equation of classical plate theory. Analytical solutions for standard boundary conditions (simply supported, clamped, free edges) are available via Navier double-series or Levy single-series methods. Relative to the Cosserat plate, the Kirchhoff–Love plate imposes the full normal hypothesis (5.16) plus small-deformation linearization.

#### 5.2.3 Reissner–Mindlin Plate: Shear-Deformable Moderately Thick Plates

The Reissner–Mindlin plate relaxes the normal hypothesis $\mathbf{d} = \mathbf{a}_3$, allowing $\delta_\alpha = d_\alpha \neq 0$ (transverse shear). Kinematically:

$$
\gamma_{\alpha 3} \approx \delta_\alpha \neq 0,\qquad
\phi_\alpha = w_{,\alpha} - \delta_\alpha,
\tag{5.26}
$$

where $\phi_\alpha$ are the independent cross-sectional rotations. The governing equations form a coupled second-order system (linear):

$$
\begin{aligned}
D\nabla^2 \phi_\alpha + \tfrac{1+\nu}{2}D(\phi_{\beta,\beta\alpha} - \phi_{\alpha,\beta\beta}) - \kappa_s Gh(\phi_\alpha + w_{,\alpha}) &= 0,\\
\kappa_s Gh(\nabla^2 w + \phi_{\beta,\beta}) + q &= 0.
\end{aligned}
\tag{5.27}
$$

As $\kappa_s Gh \to \infty$ (infinite shear stiffness), $\delta_\alpha \to 0$ and $\phi_\alpha \to -w_{,\alpha}$, recovering the Kirchhoff–Love plate (5.23). For moderately thick plates ($h/L \gtrsim 1/10$), Reissner–Mindlin theory is significantly more accurate.

### 5.3 Shell Reduction: General Shell → DMV Shell

#### 5.3.1 The DMV (Donnell–Mushtari–Vlasov) Shell Theory

The most widely used engineering simplification of the Cosserat shell is the **DMV approximation** (Donnell–Mushtari–Vlasov), applicable to **shallow shells** (radius of curvature $R \gg$ in-plane dimensions) with **moderate deflections** ($w \sim h$). The kinematic hypothesis is identical to the von Kármán plate ($\mathbf{d} = \mathbf{a}_3$), but the initial curvature $b_{\alpha\beta}$ contributes an additional term.

**Strain measures** under the DMV approximation:

$$
e_{\alpha\beta} = \tfrac12(u_{\alpha,\beta} + u_{\beta,\alpha}) + \tfrac12 w_{,\alpha}w_{,\beta} + b_{\alpha\beta} w,
\tag{5.28}
$$

$$
\kappa_{\alpha\beta} = -w_{,\alpha\beta}.
\tag{5.29}
$$

Compared with the von Kármán plate (5.18), the sole new term is $b_{\alpha\beta}w$, which captures the **arch action**: the initial curvature generates membrane strain when the shell deflects transversely, coupling bending and stretching even without geometric nonlinearity.

**DMV governing equations** (in Cartesian projection coordinates, using the Airy stress function $\Phi$):

$$
D\nabla^4 w = q + [\Phi, w] + \nabla_k^2\Phi,\qquad
\frac{1}{Eh}\nabla^4 \Phi = -\tfrac12[w,w] - \nabla_k^2 w,
\tag{5.30}
$$

where $\nabla_k^2$ is the **curvature operator** (for a cylindrical shell, $\nabla_k^2 = R^{-1}\partial^2/\partial x^2$). Compared with the von Kármán plate equations (5.21), the extra terms $-\nabla_k^2 w$ and $\nabla_k^2\Phi$ are what distinguish shell from plate behavior—**curvature coupling** allows membrane and bending actions to interact through the initial geometry even in the absence of the nonlinear $[w,w]$ term.

For a **cylindrical shell** (radius $R$, axial coordinate $x$, circumferential $y$), (5.28) specializes to the classical Donnell equations:

$$
D\nabla^4 w = q + \Phi_{,yy} w_{,xx} + \Phi_{,xx} w_{,yy} - 2\Phi_{,xy} w_{,xy} + \frac{1}{R}\Phi_{,xx},
\tag{5.31}
$$

$$
\frac{1}{Eh}\nabla^4 \Phi = (w_{,xy})^2 - w_{,xx}w_{,yy} - \frac{1}{R}w_{,xx}.
\tag{5.32}
$$

**Range of validity**:
- $R \gg h$ (thin shell)
- $w \sim h$ (moderate deflection)
- Shallow shell: $L \lesssim R/2$ (subtended angle $\lesssim 30^\circ$)

#### 5.3.2 Other Classical Shell Theories and Their Relation to DMV

DMV is the most commonly used engineering shell theory, but it is by no means the only one. The table below situates it among other classical theories and their relation to the Cosserat shell:

| Theory | Reduction Path | Cosserat Shell Correspondence | Application |
|--------|----------------|-------------------------------|-------------|
| **Kirchhoff–Love shell** | $\mathbf{d}=\mathbf{a}_3$ + linearization | Linear $e_{\alpha\beta},\kappa_{\alpha\beta}$ | Small-deflection thin shell |
| **Reissner–Naghdi shell** | First-order shear deformation | $\delta_\alpha \neq 0$ retained | Moderately thick shell |
| **Koiter shell** | $\mathbf{d}=\mathbf{a}_3$ + exact curvature | $e_{\alpha\beta}$ with full nonlinearity | Large deformation, arbitrary curvature |
| **DMV shell** | $\mathbf{d}=\mathbf{a}_3$ + shallow + moderate rotation | (5.26)–(5.27) | Shallow shell, moderate deflection |

Koiter's theory (1960, 1966) generalizes DMV to arbitrary curvature, with a strain energy that unifies membrane and bending terms:

$$
\mathcal{E} = \tfrac12\int_\omega \bigl[ h \mathbf{A}^{\alpha\beta\gamma\delta} \rho_{\alpha\beta}\rho_{\gamma\delta} + \tfrac{h^3}{12} \mathbf{A}^{\alpha\beta\gamma\delta} \bar{\kappa}_{\alpha\beta}\bar{\kappa}_{\gamma\delta} \bigr] \mathrm{d}\omega,
\tag{5.33}
$$

where $\rho_{\alpha\beta} = e_{\alpha\beta} + \tfrac12 w_{,\alpha}w_{,\beta} + \cdots$ is the membrane strain including geometric nonlinearity. When $b_{\alpha\beta}$ is constant and higher-order curvature terms are neglected, Koiter's theory reduces to DMV.

### 5.4 Overview of Reduction Paths

The following table summarizes the reduction from the general Cosserat theory to each classical theory:

| Reduction Step | Rod | Plate | Shell |
|----------------|-----|-------|-------|
| **(0) Fully general** | Cosserat rod: 6 strains + 6 curvatures | Cosserat plate: 3 $e$ + 3 $\kappa$ + 2 $\delta$ | Cosserat shell: 3 $e$ + 6 $\kappa_{i\alpha}$ + 3 $\delta$ |
| **(I) Normal hypothesis** $\mathbf{d}=\mathbf{a}_3$ | N/A | Eliminate $\delta_\alpha, \delta_3$ → von Kármán | Eliminate $\delta_\alpha, \delta_3$ → DMV/Koiter |
| **(II) Inextensible + unshearable** | $\gamma_{33}=\gamma_{\alpha 3}=0$ → Kirchhoff | N/A | N/A |
| **(III) Linearization** | Euler/Timoshenko | Kirchhoff–Love | Love/Flügge |
| **(IV) Shallow shell** | N/A | N/A | DMV (superposed on I+III) |

**Key conclusions**:

1. **Constraint implies simplification**: Each level of constraint eliminates one or more strain degrees of freedom, producing a corresponding classical theory. The Kirchhoff rod constrains 3 strains; the von Kármán plate constrains 3 ($\delta_i$); the DMV shell does the same.

2. **Sources of nonlinearity are layered**:
   - Geometric nonlinearity (large rotation) → Kirchhoff rod, Euler elastica
   - Membrane–bending coupling (moderate deflection) → von Kármán plate, DMV shell
   - Curvature coupling (linear, from initial geometry) → DMV $\nabla_k^2$ terms
   - Material nonlinearity → replace $A$ with a nonlinear function (beyond this section)

3. **Selection guide** (from the Cosserat perspective):
   - If all $\gamma_{ij}$ can be neglected → Kirchhoff rod (not the full Cosserat rod)
   - If $\delta_\alpha$ are negligible but $e_{\alpha\beta}$ contains $w_{,\alpha}w_{,\beta}$ → von Kármán plate
   - If $b_{\alpha\beta} w$ is significant → use shell theory, not plate theory
   - If the initial curvature is large or high accuracy is needed → Koiter shell over DMV
   - If none of the above apply → return to the full Cosserat theory of Parts 3 and 4

> **Summary 5.1**
>
> - The Kirchhoff rod = Cosserat rod + $\gamma_{33}=\gamma_{\alpha 3}=0$; the Euler elastica further restricts to a straight, planar rod, governed by $\ddot{\phi} + (P/EI)\sin\phi = 0$
> - The von Kármán plate = Cosserat plate + $\mathbf{d}=\mathbf{a}_3$ + moderate deflection; nonlinearity arises from $w_{,\alpha}w_{,\beta}$ in $e_{\alpha\beta}$
> - The DMV shell = von Kármán plate + shallow-shell curvature term $b_{\alpha\beta}w$; Koiter's theory extends DMV to arbitrary curvature
> - The Timoshenko beam and Reissner–Mindlin plate extend the Kirchhoff and Kirchhoff–Love theories, respectively, by relaxing the shear constraint ($\gamma_{\alpha 3} \neq 0$)
> - All classical theories are special cases of the general Cosserat theory under specific constraints and linearizations; choose the simplest theory that captures the dominant physics of the problem

--

## Part 6 — Rod, Plate, and Shell Theories in Moving Frames

前面各节均在随体坐标系（convected coordinates）中建立理论，基矢量 $\mathbf{a}_i$ 随物质变形。本节改用**单位正交活动标架**（moving orthonormal frame），其基矢量 $\mathbf{e}_i$ 满足 $\mathbf{e}_i\cdot\mathbf{e}_j = \delta_{ij}$，方向由曲线/曲面的局部几何决定。活动标架在推导简化本构和数值实现方面有重要优势。

### 6.1 活动标架的基本概念

**曲线的 Frenet 标架**：

给定弧长参数化曲线 $\mathbf{r}(s)$，Frenet 标架 $\{\mathbf{t},\mathbf{n},\mathbf{b}\}$ 满足：

$$
\frac{\mathrm{d}\mathbf{t}}{\mathrm{d}s} = \kappa\mathbf{n},\quad
\frac{\mathrm{d}\mathbf{n}}{\mathrm{d}s} = -\kappa\mathbf{t} + \tau\mathbf{b},\quad
\frac{\mathrm{d}\mathbf{b}}{\mathrm{d}s} = -\tau\mathbf{n}.
$$

Frenet 标架是单位正交的，其演化完全由曲率 $\kappa$ 和挠率 $\tau$ 决定。任意参数 $\theta$ 下，Darboux 向量 $\boldsymbol{\Omega}$ 满足 $\mathbf{e}_{i,\theta} = \boldsymbol{\Omega}\times\mathbf{e}_i$。

**曲面的正交标架**：

对于曲面 $\mathbf{r}(\theta^\alpha)$，其正交标架 $\{\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3\}$ 满足 $\mathbf{e}_\alpha\cdot\mathbf{e}_\beta = \delta_{\alpha\beta}$，$\mathbf{e}_3 = \mathbf{e}_1\times\mathbf{e}_2$ 为法向。曲面的 Darboux 标架将主方向的切向量与法向组合。活动标架的协变导数由 Ricci 旋转系数（亦称 spin coefficients）描述：

$$
\mathbf{e}_{i,\alpha} = \boldsymbol{\omega}_\alpha\times\mathbf{e}_i,
$$

其中 $\boldsymbol{\omega}_\alpha$ 为曲面的 Darboux 向量，编码了曲面的 Gauss 曲率和平均曲率信息。

### 6.2 杆在活动标架下的运动学展开

对于 Cosserat 杆 $\{\mathbf{r}(\theta,t), \mathbf{d}_\alpha(\theta,t)\}$，引入物质标架 $\mathbf{a}_i$ 和活动正交标架 $\mathbf{e}_i$。两者通过正交变换联系：

$$
\mathbf{e}_i = \mathbf{R}_i^{\,j}\mathbf{a}_j,\qquad \mathbf{R}_i^{\,j}\mathbf{R}_k^{\,i} = \delta_{kj}.
$$

**Darboux 向量**：标架沿杆轴的变化由 Darboux 向量 $\boldsymbol{\Omega}$ 描述：

$$
\mathbf{e}_{i,\theta} = \boldsymbol{\Omega}\times\mathbf{e}_i,\qquad
\boldsymbol{\Omega} = \kappa_1\mathbf{e}_1 + \kappa_2\mathbf{e}_2 + \tau\mathbf{e}_3,
$$

其中 $\kappa_1,\kappa_2$ 为两个弯曲分量，$\tau$ 为扭转分量。对于 Frenet 标架：$\kappa_1=\kappa$，$\kappa_2=0$，$\tau$ 即为挠率。

**应变度量在活动标架下的投影**：

将变形梯度 $\gamma_{ij}$ 和 $\sigma_{\alpha i}$ 投影到 $\mathbf{e}_i$ 上。杆的伸长与剪切：

$$
\gamma_{ij}^{\mathrm{e}} = \mathbf{e}_i\cdot\mathbf{a}_k\,\gamma^{kl}\,\mathbf{a}_l\cdot\mathbf{e}_j,
$$

弯曲与扭转应变由 $\boldsymbol{\Omega}$ 与参考值的差表示：

$$
\boldsymbol{\kappa} = \boldsymbol{\Omega} - \boldsymbol{\Omega}_0,\qquad
\boldsymbol{\Omega}_0 = \kappa_{01}\mathbf{e}_1 + \kappa_{02}\mathbf{e}_2 + \tau_0\mathbf{e}_3.
$$

活动标架下的应变度量与 $\gamma_{ij},\sigma_{\alpha i}$ 的转换关系为：

$$
2\gamma_{ij}^{\mathrm{e}} = \mathbf{e}_i\cdot\mathbf{a}_k(\gamma_{kl}+A_{kl})\mathbf{a}_l\cdot\mathbf{e}_j - \delta_{ij},
$$

$$
\sigma_{\alpha i}^{\mathrm{e}} = \mathbf{e}_i\cdot(\kappa_{\alpha k}\mathbf{a}^k) - \mathbf{e}_i\cdot(K_{\alpha k}\mathbf{a}^k).
$$

**速度的分解**：在活动标架下，$\mathbf{v} = v^i\mathbf{e}_i$，$\mathbf{w}_\alpha = w_{\alpha}^i\mathbf{e}_i$，其中 $v^i,w_\alpha^i$ 为标量分量。

### 6.3 壳在活动标架下的运动学展开

对于 Cosserat 壳 $\{\mathbf{r}(\theta^\alpha,t), \mathbf{d}(\theta^\alpha,t)\}$，引入正交基 $\{\mathbf{e}_\alpha,\mathbf{e}_3\}$，满足 $\mathbf{e}_\alpha\cdot\mathbf{e}_\beta = \delta_{\alpha\beta}$，$\mathbf{e}_3 = \mathbf{n}$ 为法向。

**曲面 Darboux 标架**：标架沿曲面坐标的变化由 Darboux 向量 $\boldsymbol{\omega}_\alpha$ 描述：

$$
\mathbf{e}_{i,\alpha} = \boldsymbol{\omega}_\alpha\times\mathbf{e}_i,\qquad
\boldsymbol{\omega}_\alpha = a_{\alpha j}\mathbf{e}^j.
$$

其中 $a_{\alpha j}$ 是曲面的几何系数，与 $b_{\alpha\beta}$ 和旋度系数相关。

**变形度量的正交分量**：

面内应变：

$$
e_{\alpha\beta}^{\mathrm{e}} = \tfrac12(\mathbf{e}_\alpha\cdot\mathbf{a}_\gamma\,a^{\gamma\delta}\,\mathbf{a}_\delta\cdot\mathbf{e}_\beta - \delta_{\alpha\beta}),
$$

弯曲-剪切应变（director 梯度）：

$$
\kappa_{i\alpha}^{\mathrm{e}} = \mathbf{e}_i\cdot\mathbf{d}_{,\alpha} - \mathbf{e}_i\cdot\mathbf{D}_{,\alpha},
$$

director 位移：

$$
\delta_i^{\mathrm{e}} = \mathbf{e}_i\cdot\mathbf{d} - \mathbf{e}_i\cdot\mathbf{D}.
$$

**Cosserat director 的分解**：在正交标架下，$\mathbf{d} = d^i\mathbf{e}_i$。$d^3$ 为法向分量（厚度伸缩），$d^\alpha$ 为切向分量（横向剪切）。

### 6.4 积分形式能量平衡在活动标架下的表达

在活动标架下，能量平衡的形式与随体坐标相同（标架无关性），但各项的分量表示不同。

**杆的能量平衡**（活动标架分量）：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2}\rho\Bigl(U + \tfrac12 v^iv_i + \tfrac12 y^{\alpha\beta}w_{\alpha}^i w_{\beta i}\Bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
= \int_{\theta_1}^{\theta_2}\rho\bigl(r + f^i v_i + l^{\alpha i}w_{\alpha i}\bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[n^i v_i + p^{\alpha i}w_{\alpha i} - h\Bigr]_{\theta_1}^{\theta_2}.
\tag{6.1}
$$

其中 $v_i = v^i$（笛卡尔指标升降无区别），$n^i = \mathbf{n}\cdot\mathbf{e}^i$，$p^{\alpha i} = \mathbf{p}^\alpha\cdot\mathbf{e}^i$。

**壳的能量平衡**（活动标架分量）：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_\sigma\bigl(\tfrac12\rho v^iv_i + \rho U\bigr)\,\mathrm{d}\sigma
= \int_\sigma\rho\bigl(r + F^i v_i + L^i w_i\bigr)\,\mathrm{d}\sigma
+ \int_{\mathcal{C}}\bigl(N^i v_i + M^i w_i - h\bigr)\,\mathrm{d}c.
\tag{6.2}
$$

其中 $w_i = \mathbf{w}\cdot\mathbf{e}_i$，$N^i = \mathbf{N}\cdot\mathbf{e}^i$，$M^i = \mathbf{M}\cdot\mathbf{e}^i$。

### 6.5 叠加刚体运动不变性在活动标架下的推导

**平动不变性**：与随体坐标情况完全一致。叠加 $\mathbf{v}\to\mathbf{v}+\mathbf{b}$，$\mathbf{w}_\alpha\to\mathbf{w}_\alpha$。活动标架 $\mathbf{e}_i$ 在平动下不变。得到质量守恒 (3.2) 和线动量方程 (3.3) 在活动标架下的分量形式：

$$
n^i_{,\theta} + \rho f^i = \rho\dot{v}^i\quad\text{(杆)},\qquad
N^{\alpha i}_{|\alpha} + \rho F^i = \rho\dot{v}^i\quad\text{(壳)}.
\tag{6.3}
$$

**转动不变性**：叠加刚体角速度 $\boldsymbol{\omega}$。与随体坐标情形不同，活动标架本身也经历旋转：

$$
\mathbf{e}_i^* = \mathbf{Q}\mathbf{e}_i,\qquad \dot{\mathbf{Q}} = \boldsymbol{\Omega}_0\mathbf{Q},
$$

其中 $\boldsymbol{\Omega}_0$ 是叠加的刚体转动张量。Darboux 向量变换为：

$$
\boldsymbol{\Omega}^* = \boldsymbol{\Omega} + \boldsymbol{\omega},\qquad
\boldsymbol{\omega}_\alpha^* = \boldsymbol{\omega}_\alpha + \boldsymbol{\omega}_{,\alpha}.
$$

速度的变换规则：

$$
\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r},\qquad
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha + \boldsymbol{\omega}\times\mathbf{d}_\alpha.
$$

将变换后的量代入能量平衡 (6.1) 或 (6.2)，利用 $\boldsymbol{\omega}$ 的任意性，得到角动量方程在活动标架下的形式。

**杆的角动量方程**：

$$
\mathbf{m}_{,\theta} + \mathbf{a}_3\times\mathbf{n} + \rho\mathbf{g} = \mathbf{0},
$$

分量形式：

$$
\varepsilon_{ijk}\bigl(m^j_{,\theta}\mathbf{e}^k + a_3^j n^k + \rho g^j\mathbf{e}^k\bigr) = 0.
\tag{6.4}
$$

**壳的角动量方程**：

$$
\mathbf{N}^\alpha\times\mathbf{e}_\alpha + (\mathbf{M}^\alpha\times\mathbf{d})_{|\alpha} + \rho\bar{\mathbf{L}}\times\mathbf{d} = 0.
\tag{6.5}
$$

这里的关键区别是活动标架本身的旋转引入了 $\boldsymbol{\Omega}$ 的变换项，但最终的角动量方程与随体坐标形式一致（物理定律的标架无关性）。

### 6.6 约化能量方程与 Clausius–Duhem 不等式

利用线动量方程消去动能项后，约化能量方程在活动标架下的形式为：

**杆**：

$$
-\rho\dot{U} + \rho r + \bigl(\pi^{(\alpha\beta)} - \cdots\bigr)\eta_{\alpha\beta}^{\mathrm{e}} + \frac{2}{\sqrt{a_{33}}}(n^\beta - \cdots)\eta_{\beta3}^{\mathrm{e}}
+ \frac{1}{\sqrt{a_{33}}}(n^3 - \cdots)\eta_{33}^{\mathrm{e}}
+ \frac{1}{\sqrt{a_{33}}}p^{\alpha i}\dot{\kappa}_{\alpha i}^{\mathrm{e}}
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{6.6}
$$

其中 $\eta_{ij}^{\mathrm{e}}$ 是 $\mathbf{e}_i$ 标架下的变形率分量；$\dot{\kappa}_{\alpha i}^{\mathrm{e}}$ 是标架梯度率的分量。所有的力学功率项现在以活动标架分量表达。

**壳**：

$$
\rho r - q^\alpha_{|\alpha} - \rho\dot{U} + N'^{\beta\alpha}\eta_{\alpha\beta}^{\mathrm{e}} + m^i\dot{d}_i^{\mathrm{e}} + M^{i\alpha}\dot{\lambda}_{i\alpha}^{\mathrm{e}} = 0.
\tag{6.7}
$$

**Clausius–Duhem 不等式**在活动标架下是标架无关的，形式不变：

$$
\rho T\dot{S} - \rho r + q^\alpha_{|\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\tag{6.8}
$$

### 6.7 弹性本构方程在活动标架下的表达

在活动标架下，自由能函数采用应变不变量形式。对于各向同性材料，不变量在正交标架下大大简化。

**杆的各向同性自由能**：

$$
A = A(T, I_1, I_2, I_3, J_1, J_2, J_3),
$$

其中 $I_i$ 为 $\gamma_{ij}^{\mathrm{e}}$ 的不变量，$J_i$ 为 $\sigma_{\alpha i}^{\mathrm{e}}$ 的不变量。在单位正交标架下，这些不变量退化为更简单的形式。例如，对于横观各向同性杆（沿 $\mathbf{e}_3$ 方向）：

$$
I_1 = \gamma_{33}^{\mathrm{e}},\quad I_2 = \gamma_{13}^{\mathrm{e}}\gamma_{13}^{\mathrm{e}} + \gamma_{23}^{\mathrm{e}}\gamma_{23}^{\mathrm{e}},\quad I_3 = \gamma_{11}^{\mathrm{e}}\gamma_{22}^{\mathrm{e}} - (\gamma_{12}^{\mathrm{e}})^2,
$$

$$
J_1 = \kappa_{13}^{\mathrm{e}},\quad J_2 = \kappa_{23}^{\mathrm{e}},\quad J_3 = \kappa_{12}^{\mathrm{e}} - \kappa_{21}^{\mathrm{e}}.
$$

本构方程为：

$$
n^i = \rho\frac{\partial A}{\partial\gamma_{i3}^{\mathrm{e}}},\qquad
p^{\alpha i} = \rho\frac{\partial A}{\partial\sigma_{\alpha i}^{\mathrm{e}}},\qquad
\pi^{\alpha\beta} = 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}^{\mathrm{e}}}.
\tag{6.9}
$$

**壳的各向同性自由能**：

在活动正交曲面标架下，联合不变量数量从一般的 24 个减少到：

$$
A = A(T, I_1, I_2, I_3, I_4, I_5, I_6),
$$

其中 $I_1 = e_{\alpha}^{\alpha}$（平均面内应变），$I_2 = e_{\beta}^{\alpha}e_{\alpha}^{\beta}$（面内剪切），$I_3 = \det(e_{\alpha\beta})$，$I_4 = \kappa_{\alpha}^{\alpha}$（平均弯曲），$I_5 = \kappa_{\beta}^{\alpha}\kappa_{\alpha}^{\beta}$（弯曲强度），$I_6 = \delta^i\delta_i$（director 变形）。

本构方程：

$$
N'^{\alpha\beta} = \rho\frac{\partial A}{\partial e_{\alpha\beta}},\qquad
M^{i\alpha} = \rho\frac{\partial A}{\partial\kappa_{i\alpha}},\qquad
m^i = \rho\frac{\partial A}{\partial\delta_i}.
\tag{6.10}
$$

### 6.8 特例

**Euler 弹性线在 Frenet 标架下**：

使用 Frenet 标架 $\{\mathbf{t},\mathbf{n},\mathbf{b}\}$，Darboux 向量 $\boldsymbol{\Omega} = \tau\mathbf{t} + \kappa\mathbf{b}$。对于不可伸长 Kirchhoff 杆，自由能 $A = A(T, \kappa, \tau)$。线弹性情形：

$$
A = \tfrac12 EI(\kappa-\kappa_0)^2 + \tfrac12 GJ(\tau-\tau_0)^2.
$$

力偶本构：$m_b = EI(\kappa-\kappa_0)$（弯曲力偶），$m_t = GJ(\tau-\tau_0)$（扭转力偶）。平衡方程在 Frenet 标架下分解为三个标量方程，这就是经典的 Kirchhoff 动力类比。

**Kirchhoff–Love 壳在正交标架下**：

使用主方向正交标架 $\{\mathbf{e}_1,\mathbf{e}_2,\mathbf{n}\}$，其中 $\mathbf{e}_\alpha$ 沿曲率主方向。此时 $b_{\alpha\beta} = \kappa_\alpha\delta_{\alpha\beta}$（$\kappa_\alpha$ 为主曲率），本构关系大幅简化。

应变能密度：

$$
A = \tfrac12 D^{\alpha\beta\gamma\delta} e_{\alpha\beta} e_{\gamma\delta} + \tfrac12 B^{\alpha\beta\gamma\delta} \kappa_{\alpha\beta} \kappa_{\gamma\delta},
$$

其中 $D$ 为薄膜刚度，$B$ 为弯曲刚度。在主方向标架下：

$$
D^{\alpha\beta\gamma\delta} = \frac{Eh}{1-\nu^2}\bigl[(1-\nu)\delta^{\alpha\gamma}\delta^{\beta\delta} + \nu\delta^{\alpha\beta}\delta^{\gamma\delta}\bigr],
$$

$$
B^{\alpha\beta\gamma\delta} = \frac{Eh^3}{12(1-\nu^2)}\bigl[(1-\nu)\delta^{\alpha\gamma}\delta^{\beta\delta} + \nu\delta^{\alpha\beta}\delta^{\gamma\delta}\bigr].
$$

**Cosserat 杆在活动标架下的 Timoshenko 梁方程**：

使用标架 $\{\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3\}$，其中 $\mathbf{e}_3$ 沿杆轴。设 $\mathbf{e}_1,\mathbf{e}_2$ 为截面主轴方向。本构关系在正交标架下解耦为：

$$
n_1 = k_5\gamma_{13},\quad n_2 = k_6\gamma_{23},\quad n_3 = k_3\gamma_{33},
$$

$$
m_1 = k_{15}\kappa_{23},\quad m_2 = -k_{16}\kappa_{13},\quad m_3 = \tfrac12\mu J(\kappa_{12}-\kappa_{21}).
$$

在活动标架下的 Timoshenko 梁控制方程：

$$
\frac{\partial}{\partial\xi}\Bigl[k_5\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr)\Bigr] + \rho f_2 = \rho\ddot{u}_2,
$$

$$
\frac{\partial}{\partial\xi}\Bigl[k_{15}\frac{\partial\bar{\delta}_{23}}{\partial\xi}\Bigr] - k_5\Bigl(\bar{\delta}_{23}+\frac{\partial u_2}{\partial\xi}\Bigr) + \rho\hat{q}_{23} = 0.
$$

这些方程与 (4.10) 形式相同，区别在于 $k_5,k_{15}$ 中的剪切修正系数在正交标架下可以直接从 3D 弹性力学识别。

> **总结 6.1**
>
> - 活动标架 $\{\mathbf{e}_i\}$ 的单位正交性简化了本构关系的表达
> - Darboux 向量 $\boldsymbol{\Omega}$ 编码了曲线/曲面的局部几何
> - 平动不变性在活动标架下与随体坐标相同；转动不变性需处理标架自身旋转
> - 各向同性材料的应变不变量在正交标架下数量减少、形式简化
> - Frenet 标架导出差 Euler 弹性线的 $\kappa$-$\tau$ 形式；正交曲面标架解耦膜力和弯曲刚度

---

## Part 7 — Comparison of Cosserat and Ciarlet's Differential Geometry Shell Theory

### 7.1 Overview of Ciarlet's Shell Theory

Ciarlet 的壳理论（[Ciarlet 2000, 2005]）从**三维弹性力学**出发，使用**渐近展开法**（asymptotic expansion）以厚度为小参数进行维度约化，而非引入独立 director。其核心框架建立在经典微分几何基础之上：

**坐标系统**：壳的中面由嵌入 $\mathbb{E}^3$ 的曲面 $\boldsymbol{\theta}(\omega)$ 描述，$\omega \subset \mathbb{R}^2$。三维区域为：

$$
\Omega^\varepsilon = \{\boldsymbol{\Theta}(\theta^\alpha, \xi) = \boldsymbol{\theta}(\theta^\alpha) + \xi\mathbf{a}_3(\theta^\alpha) : (\theta^\alpha) \in \omega,\; |\xi| < \varepsilon\},
$$

其中 $\varepsilon$ 为半厚度，$\mathbf{a}_3$ 为曲面法向。

**缩放**：对厚度方向的坐标进行缩放 $x_3 = \xi/\varepsilon$，将问题映射到固定厚度域 $\Omega = \omega \times (-1,1)$ 上。在 $\Omega$ 上对位移 $\mathbf{u}^\varepsilon$ 做渐近展开：

$$
\mathbf{u}^\varepsilon(\theta^\alpha, x_3) = \mathbf{u}^{(0)}(\theta^\alpha, x_3) + \varepsilon\mathbf{u}^{(1)}(\theta^\alpha, x_3) + \varepsilon^2\mathbf{u}^{(2)}(\theta^\alpha, x_3) + \cdots.
$$

**最低阶（膜理论）**：$O(1)$ 项给出膜方程，仅含面内刚度，无弯曲刚度。

**次低阶（Koiter 理论）**：$O(\varepsilon^2)$ 项给出 Koiter 壳方程，同时包含膜和弯曲刚度。

### 7.2 Comparison of Strain Measures

**Ciarlet/Koiter 的应变度量**：完全由曲面第一、第二基本型的变化定义。

线性化度量变化张量（面内应变）：

$$
\gamma_{\alpha\beta}(\boldsymbol{\eta}) = \tfrac12(a_{\alpha\beta}(\boldsymbol{\theta}+\boldsymbol{\eta}) - a_{\alpha\beta}(\boldsymbol{\theta})) \approx \tfrac12(\eta_{\alpha|\beta} + \eta_{\beta|\alpha}) - b_{\alpha\beta}\eta_3.
$$

线性化曲率变化张量（弯曲应变）：

$$
\rho_{\alpha\beta}(\boldsymbol{\eta}) = b_{\alpha\beta}(\boldsymbol{\theta}+\boldsymbol{\eta}) - b_{\alpha\beta}(\boldsymbol{\theta}) \approx \eta_{3|\alpha\beta} - \Gamma^\gamma_{\alpha\beta}\eta_{3|\gamma} - b^\gamma_\alpha b_{\gamma\beta}\eta_3 + b^\gamma_\alpha\eta_{\gamma|\beta} + b^\gamma_\beta\eta_{\gamma|\alpha} + b^\gamma_{\alpha|\beta}\eta_\gamma.
\tag{7.1}
$$

**Cosserat 理论的应变度量**（重构以对比）：

$$
e_{\alpha\beta} = \tfrac12(a_{\alpha\beta} - A_{\alpha\beta}),\qquad
\kappa_{i\alpha} = \lambda_{i\alpha} - \Lambda_{i\alpha},\qquad
\delta_i = d_i - D_i.
\tag{7.2}
$$

**关键差异**：

- Cosserat 的 $\kappa_{i\alpha}$ 包含 director 沿曲面梯度的变化（含横向剪切信息）；Ciarlet 的 $\rho_{\alpha\beta}$ 只含法向位移的二阶导数（经典 Kirchhoff–Love 假设）。
- Cosserat 的 $\delta_i$ 描述 director 的伸缩与剪切，在 Ciarlet 理论中无对应量（法向假设为直线且垂直于中面）。
- 当 Cosserat 施加强约束 $\mathbf{d} = \mathbf{a}_3$（不可伸长、不可剪切）时，$\kappa_{\alpha\beta}$ 退化为 $b_{\alpha\beta}$ 的变化，即 $\rho_{\alpha\beta}$。

### 7.3 Comparison of Energy and Variational Frameworks

**Ciarlet/Koiter 能量**：

$$
I(\boldsymbol{\eta}) = \frac12\int_\omega \Bigl[ \varepsilon a^{\alpha\beta\gamma\delta}\gamma_{\alpha\beta}(\boldsymbol{\eta})\gamma_{\gamma\delta}(\boldsymbol{\eta}) + \frac{\varepsilon^3}{3} a^{\alpha\beta\gamma\delta}\rho_{\alpha\beta}(\boldsymbol{\eta})\rho_{\gamma\delta}(\boldsymbol{\eta}) \Bigr]\,\mathrm{d}\omega - \ell(\boldsymbol{\eta}),
\tag{7.3}
$$

其中 $a^{\alpha\beta\gamma\delta} = \frac{4\lambda\mu}{\lambda+2\mu}a^{\alpha\beta}a^{\gamma\delta} + 2\mu(a^{\alpha\gamma}a^{\beta\delta}+a^{\alpha\delta}a^{\beta\gamma})$ 为二维弹性张量，$\lambda,\mu$ 为 Lamé 常数。此能量在 $H^1(\omega) \times H^1(\omega) \times H^2(\omega)$ 上强制（coercive），依赖于 **Korn 不等式在曲面上的推广**。

**Cosserat 壳能量**：

$$
I(\mathbf{r}, \mathbf{d}) = \int_\sigma \rho A(T, e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i)\,\mathrm{d}\sigma - (\text{外力功}),
$$

其中 $A$ 可包含任意非线性函数。无强制性的一般理论保证（须通过本构假设逐例验证）。

### 7.4 Asymptotic Analysis and $\Gamma$-Convergence

Ciarlet 方法的核心结果：当厚度 $\varepsilon \to 0$ 时，3D 弹性问题的解在适当意义下收敛到 2D 壳模型的解。

$$
\frac{1}{2\varepsilon}\int_{\Omega^\varepsilon} W(\nabla\mathbf{u}^\varepsilon)\,\mathrm{d}V \xrightarrow{\Gamma} I_{\text{Koiter}}(\boldsymbol{\eta}) \quad\text{或}\quad I_{\text{membrane}}(\boldsymbol{\eta}),
$$

取决于外力标度和边界条件。此 $\Gamma$-收敛结果建立了 3D 弹性力学与 2D 壳理论之间的严格数学联系。

**与 Cosserat 理论的联系**：对于厚度趋于零的极限情形：

- 约束 Cosserat 壳（$\mathbf{d} = \mathbf{a}_3$）的 $\Gamma$-极限等于 Koiter 壳的能量
- 未约束 Cosserat 壳的 $\Gamma$-极限得到包含横向剪切能的 Reissner–Mindlin 型能量
- 引入界面能的 Cosserat 模型（$\mu_c = \infty$）退化为二阶梯度模型（second gradient model）

### 7.5 Theoretical Comparison Summary

| 对比方面               | Cosserat 壳理论                                                            | Ciarlet/Koiter 壳理论                                          |
| ---------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **出发点**       | 直接假设 2D 连续体 + director；或从 3D 级数展开截断                        | 从 3D 弹性力学出发，渐近展开 +$\Gamma$-收敛                  |
| **运动学变量**   | $\mathbf{r}(\theta^\alpha), \mathbf{d}(\theta^\alpha)$（6 个独立自由度） | $\boldsymbol{\eta}(\theta^\alpha)$（3 个位移分量）           |
| **法向假设**     | 无（director 可伸缩、可旋转）                                              | Kirchhoff–Love（法线保持直线且垂直中面）                      |
| **横向剪切**     | 自然包含                                                                   | Koiter 模型中忽略；Naghdi 模型中通过独立旋转引入               |
| **厚度伸缩**     | 自然包含（$\delta_3 \neq 0$）                                            | 忽略                                                           |
| **应变度量**     | $e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i$（基于 director 梯度）      | $\gamma_{\alpha\beta}, \rho_{\alpha\beta}$（基于基本型变化） |
| **本构系数来源** | 自由参数（或 3D 积分识别）                                                 | 直接从 3D Lamé 常数 + 截面几何计算                            |
| **数学基础**     | 热力学 + 不变性原理                                                        | 函数分析 + Korn 不等式 +$\Gamma$-收敛                        |
| **存在性理论**   | 无一般保证                                                                 | Koiter 模型在$H^1\times H^1\times H^2$ 上强制                |
| **适用厚度**     | 薄至中等厚度（可含横截面变形）                                             | 薄壳（$\varepsilon \ll 1$）                                  |
| **非线性**       | 自然包含有限变形                                                           | 有限变形需特殊处理（Ciarlet 2000, Part C）                     |
| **剪切修正系数** | 从 3D 自然确定（如 F1 模态的$\kappa = 6(1+\nu)^2/(7+14\nu+8\nu^2)$）     | 需额外引入（Reissner–Mindlin 型中）                           |
| **数值方法**     | Cosserat 点（Rubin 2001），无剪切闭锁                                      | 标准有限元 + 剪切闭锁需处理                                    |

### 7.6 Bridging Cosserat → Ciarlet

当 Cosserat 壳的 director 被约束为单位法向且无横向剪切时，两者统一。设：

$$
\mathbf{d} = \mathbf{a}_3 = \text{单位法向},\qquad \delta_i = 0.
$$

则 Cosserat 的变形度量退化为：

$$
e_{\alpha\beta} = \tfrac12(a_{\alpha\beta} - A_{\alpha\beta}) \equiv \gamma_{\alpha\beta},\qquad
\kappa_{\alpha\beta} = b_{\alpha\beta} - B_{\alpha\beta} \equiv \rho_{\alpha\beta}.
$$

自由能退化为 Koiter 形式。**结论**：Kirchhoff–Love 壳是约束 Cosserat 壳的特例，而 Koiter 壳是 Kirchhoff–Love 壳的数学严格化版本（Ciarlet 2000, Steigmann 1999）。

反过来，当 Ciarlet 理论引入独立旋转场（如 Naghdi 壳模型），则两者在运动学上等价，区别仅在于推导路线（直接法 vs. 渐近法）和本构系数的标识方式。

> **总结 7.1**
>
> - Ciarlet 理论从 3D 弹性力学出发，通过渐近展开得到 2D 壳方程；Cosserat 理论从 2D 积分平衡律出发
> - Ciarlet 使用 $\gamma_{\alpha\beta}, \rho_{\alpha\beta}$（基本型变化）作为应变度量；Cosserat 使用 $e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i$（director 变形）
> - 约束 Cosserat 壳（$\mathbf{d}=\mathbf{a}_3$）退化为 Kirchhoff–Love 壳，能量等价于 Koiter 模型
> - Ciarlet 提供了严格的存在性和 $\Gamma$-收敛理论；Cosserat 提供了更宽广的物理适用范围
> - 两者互补：Ciarlet 方法给出数学严格性和系数标识，Cosserat 方法给出物理普适性和剪切/厚度变形的自然描述

---

## Appendix — Complete Derivation Chain from the First Law of Thermodynamics

本附录详细展示从**热力学第一定律的积分形式**出发，经由**叠加刚体运动下的不变性**，推导杆和壳理论的完整方程链。附录中不省略任何中间步骤。

### A.1 符号与约定

| 符号                                             | 含义                          | 类型   |
| ------------------------------------------------ | ----------------------------- | ------ |
| $\mathbf{r}$                                   | 位置向量                      | 运动学 |
| $\mathbf{a}_i$                                 | 随体基矢量                    | 运动学 |
| $\mathbf{v} = \dot{\mathbf{r}}$                | 速度                          | 运动学 |
| $\mathbf{w}_\alpha$ (杆) / $\mathbf{w}$ (壳) | director 速度                 | 运动学 |
| $\rho$                                         | 质量密度（单位长度/单位面积） | 质量   |
| $U$                                            | 单位质量内能                  | 热力学 |
| $S$                                            | 单位质量熵                    | 热力学 |
| $T > 0$                                        | 温度                          | 热力学 |
| $A = U - TS$                                   | Helmholtz 自由能              | 热力学 |
| $r$                                            | 单位质量热源                  | 热力学 |
| $h$                                            | 边界热流                      | 热力学 |
| $\mathbf{f},\mathbf{F}$                        | 体力                          | 力学   |
| $\mathbf{l}^\alpha,\mathbf{L}$                 | director 力                   | 力学   |
| $\mathbf{n},\mathbf{N}^\alpha$                 | 应力合力                      | 力学   |
| $\mathbf{p}^\alpha,\mathbf{M}^\alpha$          | director 应力合力             | 力学   |
| $y^{\alpha\beta}$                              | director 惯性系数             | 力学   |

### A.2 杆的推导链

#### A.2.1 第 1 步：积分形式能量平衡

对于杆上任意一段 $[\theta_1,\theta_2]$：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2} \rho\Bigl(U + \tfrac12\mathbf{v}\cdot\mathbf{v} + \tfrac12 y^{\alpha\beta}\mathbf{w}_\alpha\cdot\mathbf{w}_\beta\Bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
= \int_{\theta_1}^{\theta_2} \rho\bigl(r + \mathbf{f}\cdot\mathbf{v} + \mathbf{l}^\alpha\cdot\mathbf{w}_\alpha\bigr)\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[\mathbf{n}\cdot\mathbf{v} + \mathbf{p}^\alpha\cdot\mathbf{w}_\alpha - h\Bigr]_{\theta_1}^{\theta_2}.
\tag{A.1}
$$

这是所有后续推导的起点。

#### A.2.2 第 2 步：叠加刚体平动

考虑叠加均匀刚体平动速度 $\mathbf{b}$（不依赖于 $\theta$ 的任意常向量）。在新的运动中：

$$
\mathbf{v}^* = \mathbf{v} + \mathbf{b},\qquad
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha,\qquad
\mathbf{n}^* = \mathbf{n},\qquad
\mathbf{p}^{\alpha*} = \mathbf{p}^\alpha,\qquad
h^* = h.
$$

基本假设：$\rho$、$U$、$r$、$h$、$\mathbf{f}-\dot{\mathbf{v}}$、$\mathbf{l}^\alpha$、$\mathbf{n}$、$\mathbf{p}^\alpha$、$y^{\alpha\beta}$ 和 $\mathbf{w}_\alpha$ 在叠加均匀刚体平动后保持不变。

将平动变换代入 (A.1)，减去原方程，得到：

$$
\begin{aligned}
\mathbf{b}\cdot &\Bigl\{\int_{\theta_1}^{\theta_2}\rho(\dot{\mathbf{v}}-\mathbf{f})\sqrt{a_{33}}\,\mathrm{d}\theta - \bigl[\mathbf{n}\bigr]_{\theta_1}^{\theta_2}
+ \int_{\theta_1}^{\theta_2}\mathbf{v}\bigl[\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}}\bigr]\sqrt{a_{33}}\,\mathrm{d}\theta\Bigr\} \\
&+ \frac12(\mathbf{b}\cdot\mathbf{b})\int_{\theta_1}^{\theta_2}\bigl[\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}}\bigr]\sqrt{a_{33}}\,\mathrm{d}\theta = 0.
\end{aligned}
\tag{A.2}
$$

#### A.2.3 第 3 步：质量守恒

由于 (A.2) 对任意 $\mathbf{b}$ 成立，通过取 $\mathbf{b}\to\beta\mathbf{b}$ 并令 $\beta$ 变化，分离出 $\mathbf{b}\cdot\mathbf{b}$ 项。首先得到：

$$
\int_{\theta_1}^{\theta_2}\bigl[\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}}\bigr]\sqrt{a_{33}}\,\mathrm{d}\theta = 0\quad\forall[\theta_1,\theta_2].
$$

局部化（积分为零对任意区间 → 被积函数为零）：

$$
\boxed{\dot{\rho} + \rho\frac{\dot{a}_{33}}{2a_{33}} = 0}\quad\Longleftrightarrow\quad \frac{\mathrm{D}}{\mathrm{D}t}(\rho\sqrt{a_{33}})=0.
\tag{A.3}
$$

这就是 Cosserat 杆的**质量守恒方程**。

#### A.2.4 第 4 步：线动量方程

利用 (A.3) 简化 (A.2) 中的 $\mathbf{b}$ 项系数，得到积分形式的线动量方程：

$$
\int_{\theta_1}^{\theta_2}\rho(\dot{\mathbf{v}}-\mathbf{f})\sqrt{a_{33}}\,\mathrm{d}\theta - \bigl[\mathbf{n}\bigr]_{\theta_1}^{\theta_2} = 0.
\tag{A.4}
$$

利用牛顿-莱布尼茨公式 $[\mathbf{n}]_{\theta_1}^{\theta_2} = \int_{\theta_1}^{\theta_2}\frac{\partial\mathbf{n}}{\partial\theta}\,\mathrm{d}\theta$，并合并积分：

$$
\int_{\theta_1}^{\theta_2}\Bigl(\rho\dot{\mathbf{v}} - \rho\mathbf{f} - \frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{n}}{\partial\theta}\Bigr)\sqrt{a_{33}}\,\mathrm{d}\theta = 0.
$$

局部化得到**微分形式的线动量方程**：

$$
\boxed{\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{n}}{\partial\theta} + \rho\mathbf{f} = \rho\dot{\mathbf{v}}}.
\tag{A.5}
$$

#### A.2.5 第 5 步：叠加刚体转动

考虑叠加均匀刚体角速度 $\boldsymbol{\omega}$（不依赖于 $\theta$）。在新的运动中，量取相同的占位（same placement at time $t$）。

**运动学量的变换**：

$$
\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r},\qquad
\mathbf{w}_\alpha^* = \mathbf{w}_\alpha + \boldsymbol{\omega}\times\mathbf{d}_\alpha,
$$

$$
\eta_{ki}^* = \eta_{ki},\qquad
\psi_{ki}^* = \psi_{ki} - \Omega_{ki},
$$

其中 $\Omega_{ki} = \varepsilon_{kim}\omega^m$，$\eta_{ki} = c_{(ki)}$，$\psi_{ki}=c_{[ki]}$。

**不变性假设**：$\rho$、$r$、$U$、$\mathbf{n}$、$\mathbf{p}^\alpha$、$\mathbf{q}^\alpha \equiv \mathbf{l}^\alpha - \tfrac12\dot{y}^{\alpha\beta}\mathbf{w}_\beta - y^{\alpha\beta}\ddot{\mathbf{w}}_\beta$ 在叠加刚体转动后保持不变。

#### A.2.6 第 6 步：约化能量方程（转动不变性之前）

先利用质量守恒 (A.3) 和线动量方程 (A.5)，从完整能量平衡 (A.1) 中消去动能项。将 (A.1) 中的 $\frac{\mathrm{D}}{\mathrm{D}t}$ 展开，代入 (A.3) 和 (A.5)，得到：

$$
-\rho\dot{U} + \rho r + \rho\mathbf{q}^\alpha\cdot\mathbf{w}_\alpha
+ \frac{1}{\sqrt{a_{33}}}\frac{\partial}{\partial\theta}(\mathbf{p}^\alpha\cdot\mathbf{w}_\alpha)
+ \frac{1}{\sqrt{a_{33}}}\mathbf{n}\cdot\frac{\partial\mathbf{v}}{\partial\theta}
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{A.6}
$$

这就是局部化的**微分形式能量方程**（尚未约化）。

#### A.2.7 第 7 步：转动不变性 → 角动量方程

将转动变换代入 (A.6)，利用 $\boldsymbol{\omega}$ 的任意性，得到两组条件：

**(a) 角动量方程**：

$$
\frac{1}{\sqrt{a_{33}}}\frac{\partial\mathbf{m}}{\partial\theta} + \frac{1}{\sqrt{a_{33}}}\mathbf{a}_3\times\mathbf{n} + \rho\dot{\mathbf{g}} = 0,
\tag{A.7}
$$

其中 $\mathbf{m} = \mathbf{a}_\alpha\times\mathbf{p}^\alpha$（力偶合力），$\dot{\mathbf{g}} = \mathbf{a}_\alpha\times\mathbf{q}^\alpha$（体力偶）。

**(b) 对称性条件**（分量形式）：

$$
\pi^{[\alpha\beta]} + \frac{1}{2\sqrt{a_{33}}}\bigl(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha} - p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}\bigr) = 0,
\tag{A.8}
$$

$$
\pi^{\beta3} + \frac{1}{\sqrt{a_{33}}}\bigl(p^{\alpha3}\kappa_\alpha^{\cdot\beta} - p^{\alpha\beta}\kappa_\alpha^{\cdot3}\bigr) - \frac{1}{\sqrt{a_{33}}}n^\beta = 0.
\tag{A.9}
$$

#### A.2.8 第 8 步：约化能量方程（转动不变性之后）

利用 (A.7)–(A.9) 进一步简化 (A.6)，消去与旋率 $\psi_{ki}$ 相关的项，得到**约化能量方程**：

$$
-\rho\dot{U} + \rho r + \eta_{k\alpha}\,\pi^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\bigl(\dot{\kappa}_{\alpha k} - \eta_{kj}\,\kappa_\alpha^{\cdot j}\bigr)\,\mathbf{p}^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\,\eta_{k3}\,\mathbf{n}\cdot\mathbf{a}^k
- \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{A.10}
$$

这是不含动能项的纯热力学能量方程。

#### A.2.9 第 9 步：Clausius–Duhem 熵不等式

第二定律的积分形式：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_{\theta_1}^{\theta_2}\rho S\sqrt{a_{33}}\,\mathrm{d}\theta
- \int_{\theta_1}^{\theta_2}\frac{\rho r}{T}\sqrt{a_{33}}\,\mathrm{d}\theta
+ \Bigl[\frac{h}{T}\Bigr]_{\theta_1}^{\theta_2} \ge 0.
\tag{A.11}
$$

利用质量守恒 (A.3) 并局部化：

$$
\rho\dot{S}T - \rho r + \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta}
- \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0.
\tag{A.12}
$$

将 (A.12) 与约化能量方程 (A.10) 联合，消去 $\rho r - \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta}$，引入 $A = U - TS$：

$$
-\rho(\dot{A} + \dot{T}S) + \eta_{k\alpha}\,\pi^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\bigl(\dot{\kappa}_{\alpha k} - \eta_{kj}\,\kappa_\alpha^{\cdot j}\bigr)\,\mathbf{p}^\alpha\cdot\mathbf{a}^k
+ \frac{1}{\sqrt{a_{33}}}\,\eta_{k3}\,\mathbf{n}\cdot\mathbf{a}^k
- \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0.
\tag{A.13}
$$

这就是**Clausius–Duhem 不等式**在 Cosserat 杆中的形式。

#### A.2.10 第 10 步：弹性本构方程

对于弹性杆，Helmholtz 自由能取为应变度量的函数：

$$
A = A(T, \gamma_{ij}, \sigma_{\alpha i}),\qquad
\gamma_{ij} = a_{ij}-A_{ij},\quad \sigma_{\alpha i} = \kappa_{\alpha i}-K_{\alpha i}.
$$

时间导数：$\dot{\gamma}_{ij} = 2\eta_{ij}$，$\dot{\sigma}_{\alpha i} = \dot{\kappa}_{\alpha i}$。

将 $\dot{A} = \frac{\partial A}{\partial T}\dot{T} + \frac{\partial A}{\partial\gamma_{ij}}(2\eta_{ij}) + \frac{\partial A}{\partial\sigma_{\alpha i}}\dot{\kappa}_{\alpha i}$ 代入 (A.13)，得到：

$$
\begin{aligned}
&-\rho\Bigl(S+\frac{\partial A}{\partial T}\Bigr)\dot{T}
+ \Bigl[\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) - 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}}\Bigr]\eta_{\alpha\beta} \\
&+ \Bigl[\frac{2}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta}) - 2\rho\frac{\partial A}{\partial\gamma_{\beta3}}\Bigr]\eta_{\beta3}
+ \Bigl[\frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3}) - 2\rho\frac{\partial A}{\partial\gamma_{33}}\Bigr]\eta_{33} \\
&+ \Bigl[\frac{1}{\sqrt{a_{33}}}p^{\alpha i} - \rho\frac{\partial A}{\partial\sigma_{\alpha i}}\Bigr]\dot{\kappa}_{\alpha i}
- \frac{1}{\sqrt{a_{33}}}\frac{h}{T}\frac{\partial T}{\partial\theta} \ge 0.
\end{aligned}
\tag{A.14}
$$

由于 $\{\dot{T},\eta_{\alpha\beta},\eta_{\beta3},\eta_{33},\dot{\kappa}_{\alpha i},\partial T/\partial\theta\}$ 是相互独立的（对于弹性材料且温度均匀时），不等式 (A.14) 要求各系数分别等于零：

**熵状态方程**：

$$
\boxed{S = -\frac{\partial A}{\partial T}}.
\tag{A.15}
$$

**应力本构方程**：

$$
\boxed{\frac{1}{\sqrt{a_{33}}}(n^3 - p^{\alpha3}\kappa_\alpha^{\cdot3}) = 2\rho\frac{\partial A}{\partial\gamma_{33}}},
\tag{A.16}
$$

$$
\boxed{\frac{1}{\sqrt{a_{33}}}(n^\beta - p^{\alpha3}\kappa_\alpha^{\cdot\beta}) = \rho\frac{\partial A}{\partial\gamma_{\beta3}}},
\tag{A.17}
$$

$$
\boxed{\pi^{(\alpha\beta)} - \frac{1}{2\sqrt{a_{33}}}(p^{\gamma\beta}\kappa_\gamma^{\cdot\alpha}+p^{\gamma\alpha}\kappa_\gamma^{\cdot\beta}) = 2\rho\frac{\partial A}{\partial\gamma_{\alpha\beta}}},
\tag{A.18}
$$

$$
\boxed{\frac{1}{\sqrt{a_{33}}}p^{\alpha i} = \rho\frac{\partial A}{\partial\sigma_{\alpha i}}}.
\tag{A.19}
$$

**热传导不等式**：

$$
\boxed{-h\,\frac{\partial T}{\partial\theta} \ge 0}.
\tag{A.20}
$$

**残余能量方程**（热传导方程）：

$$
\rho r - \rho T\dot{S} - \frac{1}{\sqrt{a_{33}}}\frac{\partial h}{\partial\theta} = 0.
\tag{A.21}
$$

方程组 (A.3)、(A.5)、(A.7) 加上 (A.15)–(A.21) 构成 Cosserat 杆的完整控制方程。

### A.3 壳的推导链

#### A.3.1 第 1 步：积分形式能量平衡

对于曲面上任意区域 $\sigma$（边界 $\mathcal{C}$）：

$$
\frac{\mathrm{D}}{\mathrm{D}t}\int_\sigma\bigl(\tfrac12\rho\mathbf{v}\cdot\mathbf{v} + \rho U\bigr)\,\mathrm{d}\sigma
= \int_\sigma\rho\bigl(r + \mathbf{F}\cdot\mathbf{v} + \bar{\mathbf{L}}\cdot\mathbf{w}\bigr)\,\mathrm{d}\sigma
+ \int_{\mathcal{C}}\bigl(\mathbf{N}\cdot\mathbf{v} + \mathbf{M}\cdot\mathbf{w} - h\bigr)\,\mathrm{d}c.
\tag{A.22}
$$

注意壳的动能只含 $\tfrac12\rho\mathbf{v}\cdot\mathbf{v}$（无 director 动能项），这与杆不同。

#### A.3.2 第 2 步：叠加刚体平动

变换：$\mathbf{v}^* = \mathbf{v} + \mathbf{b}$，$\mathbf{w}^* = \mathbf{w}$。利用 $\mathbf{b}$ 的任意性。

首先将 (A.22) 中的 $\frac{\mathrm{D}}{\mathrm{D}t}$ 展开到面积分内部。面积元的变化率为：

$$
\frac{\mathrm{D}}{\mathrm{D}t}(\mathrm{d}\sigma) = (v^\alpha_{|\alpha} - b^\alpha_\alpha v_3)\,\mathrm{d}\sigma.
$$

代入并利用 $\mathbf{b}$ 的任意性：

**(a) 质量守恒**：

$$
\int_\sigma\bigl[\dot{\rho} + \rho(v^\alpha_{|\alpha} - b^\alpha_\alpha v_3)\bigr]\,\mathrm{d}\sigma = 0\quad\forall\sigma,
$$

局部化：

$$
\boxed{\frac{\mathrm{D}\rho}{\mathrm{D}t} + \rho(v^\alpha_{|\alpha} - b^\alpha_\alpha v_3) = 0}.
\tag{A.23}
$$

**(b) 积分线动量方程**：

$$
\int_\sigma\rho(\dot{\mathbf{v}} - \mathbf{F})\,\mathrm{d}\sigma - \int_{\mathcal{C}}\mathbf{N}\,\mathrm{d}c = 0.
\tag{A.24}
$$

#### A.3.3 第 3 步：微分形式线动量方程

将 $\mathbf{N} = \mathbf{N}^\alpha\nu_\alpha$（$\nu_\alpha$ 为边界外法向）代入 (A.24)，应用 Stokes 定理 $\oint\mathbf{N}^\alpha\nu_\alpha\,\mathrm{d}c = \int_\sigma\mathbf{N}^\alpha_{|\alpha}\,\mathrm{d}\sigma$：

$$
\int_\sigma\bigl[\rho(\dot{\mathbf{v}} - \mathbf{F}) - \mathbf{N}^\alpha_{|\alpha}\bigr]\,\mathrm{d}\sigma = 0.
$$

局部化：

$$
\boxed{\mathbf{N}^\alpha_{|\alpha} + \rho\mathbf{F} = \rho\dot{\mathbf{v}}}.
\tag{A.25}
$$

分量形式：

$$
N^{\beta\alpha}_{|\alpha} - b^\beta_\alpha N^{3\alpha} + \rho F^\beta = \rho c^\beta,\qquad
N^{3\alpha}_{|\alpha} + b_{\alpha\beta} N^{\beta\alpha} + \rho F^3 = \rho c^3.
\tag{A.26}
$$

#### A.3.4 第 4 步：叠加刚体转动

变换：$\mathbf{v}^* = \mathbf{v} + \boldsymbol{\omega}\times\mathbf{r}$，$\mathbf{w}^* = \mathbf{w} + \boldsymbol{\omega}\times\mathbf{d}$。

运动学量变换：

$$
\eta_{ki}^* = \eta_{ki},\qquad \psi_{ki}^* = \psi_{ki} - \Omega_{ki},\qquad
\Omega_{ki} = \varepsilon_{kim}\omega^m.
$$

#### A.3.5 第 5 步：约化能量方程（转动不变性之前）

利用质量守恒 (A.23) 和线动量方程 (A.25)，从 (A.22) 消去动能项。经计算得到局部化的微分能量方程：

$$
\rho r - q^\alpha_{|\alpha} - \rho\dot{U} + \mathbf{m}\cdot\mathbf{w}
+ \mathbf{N}^\alpha\cdot\mathbf{v}_{,\alpha}
+ \mathbf{M}^\alpha\cdot\mathbf{w}_{,\alpha} = 0,
\tag{A.27}
$$

其中 $\mathbf{m} = \mathbf{M}^\alpha_{|\alpha} + \rho\bar{\mathbf{L}}$ 为组合 director 力，$q^\alpha$ 为热流矢量。

#### A.3.6 第 6 步：转动不变性 → 角动量方程

将转动变换代入 (A.27)，利用 $\boldsymbol{\omega}$ 的任意性。首先定义边界残差量：

$$
\bar{\mathbf{M}} = \mathbf{M} - \mathbf{M}^\alpha\nu_\alpha,\qquad
\overline{h} = h - q^\alpha\nu_\alpha.
$$

从边界条件得到对称性条件：

$$
\boxed{\mathbf{d}\times\bar{\mathbf{M}} = 0}.
\tag{A.28}
$$

从场方程得到角动量方程：

$$
\boxed{\mathbf{N}^\alpha\times\mathbf{a}_\alpha + (\mathbf{M}^\alpha\times\mathbf{d})_{|\alpha} + \rho\bar{\mathbf{L}}\times\mathbf{d} = 0}.
\tag{A.29}
$$

分量对称性条件：

$$
\varepsilon_{\beta\alpha}[N^{\beta\alpha} + m^\beta d^\alpha + M^{\beta\gamma}\lambda_{\,.\gamma}^\alpha] = 0.
\tag{A.30}
$$

#### A.3.7 第 7 步：约化能量方程

利用 (A.28)–(A.30) 进一步简化 (A.27)，得到**约化能量方程**（不含旋率相关项）：

$$
\boxed{\rho r - q^\alpha_{|\alpha} - \rho\dot{U} + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} = 0}.
\tag{A.31}
$$

其中 $N'^{\alpha\beta} = N^{\beta\alpha} - m^\alpha d^\beta - M^{\alpha\gamma}\lambda_{\,.\gamma}^\beta$ 为对称的有效应力张量。

#### A.3.8 第 8 步：Clausius–Duhem 不等式

第二定律积分形式：

$$
\int_\sigma\rho\dot{S}\,\mathrm{d}\sigma - \int_\sigma\frac{\rho r}{T}\,\mathrm{d}\sigma + \int_{\mathcal{C}}\frac{h}{T}\,\mathrm{d}c \ge 0.
\tag{A.32}
$$

利用 $\overline{h}=0$（由弹性本构假设 $h = q^\alpha\nu_\alpha$）局部化：

$$
\rho T\dot{S} - \rho r + q^\alpha_{|\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\tag{A.33}
$$

联合 (A.31) 和 (A.33)，引入 $A = U - TS$：

$$
-\rho(\dot{A} + \dot{T}S) + N'^{\beta\alpha}\eta_{\alpha\beta} + m^i\dot{d}_i + M^{i\alpha}\dot{\lambda}_{i\alpha} - \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\tag{A.34}
$$

#### A.3.9 第 9 步：弹性壳的本构方程

对于弹性 Cosserat 壳：

$$
A = A(T, e_{\alpha\beta}, \kappa_{i\alpha}, \delta_i).
$$

关系：$\dot{e}_{\alpha\beta} = \eta_{\alpha\beta}$，$\dot{\kappa}_{i\alpha} = \dot{\lambda}_{i\alpha}$，$\dot{\delta}_i = \dot{d}_i$。

将 $\dot{A} = \frac{\partial A}{\partial T}\dot{T} + \frac{\partial A}{\partial e_{\alpha\beta}}\eta_{\alpha\beta} + \frac{\partial A}{\partial\kappa_{i\alpha}}\dot{\lambda}_{i\alpha} + \frac{\partial A}{\partial\delta_i}\dot{d}_i$ 代入 (A.34)：

$$
\begin{aligned}
&-\rho\Bigl(S+\frac{\partial A}{\partial T}\Bigr)\dot{T}
+ \Bigl(N'^{\beta\alpha} - \rho\frac{\partial A}{\partial e_{\alpha\beta}}\Bigr)\eta_{\alpha\beta} \\
&+ \Bigl(m^i - \rho\frac{\partial A}{\partial\delta_i}\Bigr)\dot{d}_i
+ \Bigl(M^{i\alpha} - \rho\frac{\partial A}{\partial\kappa_{i\alpha}}\Bigr)\dot{\lambda}_{i\alpha}
- \frac{q^\alpha T_{,\alpha}}{T} \ge 0.
\end{aligned}
\tag{A.35}
$$

利用 $\{\dot{T},\eta_{\alpha\beta},\dot{d}_i,\dot{\lambda}_{i\alpha},\partial T/\partial\theta\}$ 的独立性：

**熵**：

$$
\boxed{S = -\frac{\partial A}{\partial T}}.
\tag{A.36}
$$

**弹性本构**：

$$
\boxed{N'^{\beta\alpha} = \rho\frac{\partial A}{\partial e_{\alpha\beta}},\qquad
m^i = \rho\frac{\partial A}{\partial \delta_i},\qquad
M^{i\alpha} = \rho\frac{\partial A}{\partial \kappa_{i\alpha}}}.
\tag{A.37}
$$

**热传导不等式**：

$$
\boxed{-q^\alpha T_{,\alpha} \ge 0}.
\tag{A.38}
$$

方程组 (A.23)、(A.25)、(A.29)、(A.36)–(A.38) 构成 Cosserat 壳的完整控制方程。

### A.4 杆与壳的推导链对比

| 步骤            | 杆                                                                                        | 壳                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 积分能量平衡    | (A.1)                                                                                     | (A.22)                                                                             |
| 平动变换        | $\mathbf{v}\to\mathbf{v}+\mathbf{b}$, $\mathbf{w}_\alpha\to\mathbf{w}_\alpha$         | $\mathbf{v}\to\mathbf{v}+\mathbf{b}$, $\mathbf{w}\to\mathbf{w}$                |
| 质量守恒        | (A.3):$\dot{\rho}+\rho\dot{a}_{33}/2a_{33}=0$                                           | (A.23): $\dot{\rho}+\rho(v^\alpha_{                                                |
| 线动量方程      | (A.5):$\mathbf{n}_{,\theta}/\sqrt{a_{33}}+\rho\mathbf{f}=\rho\dot{\mathbf{v}}$          | (A.25): $\mathbf{N}^\alpha_{                                                       |
| 转动变换        | 加$\boldsymbol{\omega}\times\mathbf{r}$, $\boldsymbol{\omega}\times\mathbf{d}_\alpha$ | 加$\boldsymbol{\omega}\times\mathbf{r}$, $\boldsymbol{\omega}\times\mathbf{d}$ |
| 角动量方程      | (A.7)                                                                                     | (A.29)                                                                             |
| 对称性条件      | (A.8)–(A.9)                                                                              | (A.28), (A.30)                                                                     |
| 约化能量方程    | (A.10)                                                                                    | (A.31)                                                                             |
| Clausius–Duhem | (A.13)                                                                                    | (A.34)                                                                             |
| 本构方程        | (A.15)–(A.19)                                                                            | (A.36)–(A.37)                                                                     |
| 热传导不等式    | (A.20)                                                                                    | (A.38)                                                                             |
| 独立变量        | $T,\gamma_{ij},\sigma_{\alpha i}$                                                       | $T,e_{\alpha\beta},\kappa_{i\alpha},\delta_i$                                    |

---

## References

- Green, A. E. & Laws, N. (1966). A general theory of rods. *Proc. R. Soc. Lond. A*, 293, 145.
- Green, A. E., Laws, N. & Naghdi, P. M. (1968). Rods, plates and shells. *Proc. Camb. Phil. Soc.*, 64, 895.
- Green, A. E., Naghdi, P. M. & Wainwright, W. L. (1965). A general theory of a Cosserat surface. *Arch. Rational Mech. Anal.*, 20, 287.
- Green, A. E. & Naghdi, P. M. (1970). Non-isothermal theory of rods, plates and shells. *Int. J. Solids Structures*, 6, 209.
- Green, A. E. & Naghdi, P. M. (1979). On electromagnetic effects in the theory of shells and plates. *Q. Jl Mech. appl. Math.*, 32, 279.
- Green, A. E. & Naghdi, P. M. (1985). A thermomechanical theory of a Cosserat point with application to composite materials. *Q. Jl Mech. appl. Math.*, 38, 1.
- Green, A. E., Naghdi, P. M. & Wenner, M. L. (1974). On the theory of rods. I. Derivations from the three-dimensional equations. *Proc. R. Soc. Lond. A*, 337, 451.
- Green, A. E., Naghdi, P. M. & Wenner, M. L. (1974). On the theory of rods. II. Developments by direct approach. *Proc. R. Soc. Lond. A*, 337, 485.
- Kafadar, C. B. (1972). On the nonlinear theory of rods. *Int. J. Engng Sci.*, 10, 337.
- Laws, N. (1967). A simple dipolar curve. *Q. Jl Mech. appl. Math.*, 20, 515. **注：该理论不适用于 3D 杆运动，仅为一维偶极曲线分析。**
- Naghdi, P. M. & Rubin, M. B. (1984). Constrained theories of rods. *J. Elasticity*, 14, 343.
- Naghdi, P. M. & Rubin, M. B. (1989). On the significance of normal cross-sectional extension in beam theory with application to contact problems. *Int. J. Solids Structures*, 25, 249.
- Rubin, M. B. (2001). Numerical solution procedures for nonlinear elastic rods using the theory of a Cosserat point. *Int. J. Solids Structures*, 38, 4395.
