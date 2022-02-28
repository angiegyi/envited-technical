import React from "react";

interface Props {
	border?: string;
	color?: string;
	children?: React.ReactNode;
	height?: string;
	onClick?: () => void;
	width?: string;
	margin?: string;
	flex?: number;
	outlineColor?: string;
}

const CustomButton: React.FC<Props> = ({
	border,
	color,
	children,
	height,
	width,
	margin,
	flex,
	outlineColor,
}) => {
	return (
		<button
			style={{
				backgroundColor: color,
				border: border || "none",
				borderRadius: "100px",
				height,
				width,
				margin,
				padding: "5px 10px 5px 10px",
				flex,
				outlineColor,
			}}
		>
			{children}
		</button>
	);
};

export default CustomButton;
