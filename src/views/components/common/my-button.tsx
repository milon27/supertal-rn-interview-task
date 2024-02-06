import React from "react"
import { ActivityIndicator, Platform, Text, TouchableOpacity, View, ViewProps } from "react-native"
import { TailwindTheme } from "../../../config/theme.config"
import { RnUtils } from "../../../utils/rn.util"

type IVariantStyle = "primary" | "fill" | "fillLight" | "outline" | "accent"

const variantBtnBgStyles = {
    primary: "bg-primary",
    accent: "bg-[#0084ff]",
    fill: "bg-gray-300 dark:bg-gray-600",
    // inputFill: "bg-[#dedede] dark:bg-[#212121]",
    fillLight: "bg-gray-200 dark:bg-gray-700",
    outline: "bg-transparent border border-gray-400",
}

const variantBtnTextStyles = {
    primary: "text-gray-100",
    accent: "text-[#fff]",
    fill: "text-gray-600 dark:text-gray-300",
    // inputFill: "text-gray-600 dark:text-gray-300",
    fillLight: "text-gray-700 dark:text-gray-200",
    outline: "text-gray-600 dark:text-gray-300",
}

const variantSizeStyles = {
    default: "py-2.5",
    small: "py-1.5",
    xs: "py-1",
}

interface IMyButton extends ViewProps {
    loading?: boolean
    disabled?: boolean
    rounded?: boolean
    shadow?: boolean
    size?: "default" | "small" | "xs"
    variant?: IVariantStyle
    title: string
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    onPress: () => void
}
export default function MyButton({
    title,
    size = "default",
    disabled = false,
    loading = false,
    variant = "primary",
    style,
    onPress,
    iconLeft,
    iconRight,
    rounded = true,
    shadow = true,
}: IMyButton) {
    return (
        <TouchableOpacity
            disabled={disabled || loading}
            onPress={() => onPress()}
            style={[
                style,
                shadow && variant !== "outline"
                    ? {
                          ...RnUtils.getShadowStyle(),
                      }
                    : {},
            ]}
            className={`overflow-hidden ${Number(Platform.Version) < 28 ? "px-1" : "px-4"} ${
                variantSizeStyles[size]
            } ${rounded ? "rounded-[40px]" : size === "xs" ? "rounded-lg" : "rounded-xl"}  ${
                disabled ? "bg-primary-disabled" : variantBtnBgStyles[variant]
            }`}>
            {loading ? (
                <ActivityIndicator
                    color={
                        variant === "fill" || variant === "outline"
                            ? TailwindTheme.colors.primary
                            : TailwindTheme.colors.gray[100]
                    }
                    size={30}
                />
            ) : (
                <View className="flex flex-row space-x-2 justify-between items-center ">
                    <View>{iconLeft && iconLeft}</View>
                    <Text
                        className={`${size === "xs" ? "text-xs" : "text-base "}font-light text-center ${
                            // variant === 'fill' ? 'text-primary-main' : 'text-gray-100'
                            variantBtnTextStyles[variant]
                        }`}>
                        {title}
                    </Text>
                    <View>{iconRight && iconRight}</View>
                </View>
            )}
        </TouchableOpacity>
    )
}

// https://www.nativewind.dev/guides/custom-components
