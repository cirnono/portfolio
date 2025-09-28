export const circle = () => {
    return (
        <div className="relative w-full max-w-[1200px] aspect-[12/8]">
            {/* SVG 负责画圈、十字轴；100x100 的 viewBox 让我们用百分比思维 */}
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
            >
                {/** 圆心（百分比坐标） */}
                {(() => {
                    const cx = 50; // 横向 50%（中点）
                    const cy = 50; // 纵向 50%（中点）

                    // 半径（也按 viewBox 百分比来设）
                    const baseRx = 10; // 最内圈 rx（相当于容器宽度的 10%）
                    const baseRy = 6; // 最内圈 ry（相当于容器高度的 6%）
                    const stepRx = 8; // 每一圈 rx 递增
                    const stepRy = 5; // 每一圈 ry 递增
                    const rings = 5;

                    return (
                        <>
                            {/* 同心椭圆 */}
                            {Array.from({ length: rings }).map((_, i) => (
                                <ellipse
                                    key={i}
                                    cx={cx}
                                    cy={cy}
                                    rx={baseRx + i * stepRx}
                                    ry={baseRy + i * stepRy}
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth={0.6} // 基于 viewBox 的线宽，缩放也不发虚
                                />
                            ))}

                            {/* 水平/垂直轴线 */}
                            <line
                                x1={0}
                                y1={cy}
                                x2={100}
                                y2={cy}
                                stroke="#fff"
                                strokeWidth={0.6}
                            />
                            <line
                                x1={cx}
                                y1={0}
                                x2={cx}
                                y2={100}
                                stroke="#fff"
                                strokeWidth={0.6}
                            />
                        </>
                    );
                })()}
            </svg>

            {/* 你的图标/标签仍然可以绝对定位叠加在上面 */}
            {/* 用百分比定位：left:`calc(50% + ${x}%)`, top:`calc(50% + ${y}%)` */}
        </div>
    );
};
