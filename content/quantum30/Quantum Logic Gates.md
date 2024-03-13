---
dg-publish: true
---
## Not gate / X gate 

$$
{NOT|0\rangle = |1\rangle}
$$
$$
{NOT|1\rangle = |0\rangle}
$$
$$
{NOT( a|0\rangle + b|1\rangle ) = b|0\rangle + a|1\rangle}
$$
$$
{X} =\begin{bmatrix} 0 & 1 \\ 1 & 0\end{bmatrix}
$$

## Hadamard gate / H gate

	by expanding the range of states that we can access, beyond what is possible on a classical computer, it becomes possible to take shortcuts in our computation

$$
H|0\rangle = \dfrac{|0\rangle + |1\rangle}{\sqrt2}
$$
$$
H|1\rangle = \dfrac{|0\rangle - |1\rangle}{\sqrt2}
$$
$$
H(\alpha|0\rangle + \beta|1\rangle) = \alpha(\dfrac{|0\rangle + |1\rangle}{\sqrt2}) + \beta(\dfrac{|0\rangle - |1\rangle}{\sqrt2})
= \dfrac{\alpha + \beta}{\sqrt2}|0\rangle + \dfrac{\alpha - \beta}{\sqrt2}|1\rangle
$$
$$
{H} = \dfrac{1}{\sqrt2}\begin{bmatrix} 1 & 1 \\ 1 & -1\end{bmatrix}
$$

### cancellation of $|1\rangle$ and reinforcement of $|0\rangle$ 
$$
\begin{aligned}
&H(H|0\rangle) = H(\dfrac{|0\rangle + |1\rangle}{\sqrt2}) \\
&                        =  \dfrac{1}{\sqrt2}(\dfrac{|0\rangle + |1\rangle}{\sqrt2}) +  \dfrac{1}{\sqrt2}(\dfrac{|0\rangle - |1\rangle}{\sqrt2}) \\
& = \dfrac{1}{\sqrt2}(\dfrac{|0\rangle}{\sqrt2} + \dfrac{|0\rangle}{\sqrt2}) \\
& = |0\rangle
\end{aligned}
$$
