import { useColorScheme } from "nativewind"
import React from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { Keyboard, Text, TextInput, TextInputProps, View } from "react-native"
import { TailwindTheme } from "../../../../config/theme.config"
import { RuleType } from "../../../../types/form.type"

interface IMyInput extends TextInputProps {
    label: string
    error?: string
    myRef?: React.LegacyRef<TextInput>
    handleNext?: () => void
}

export const MyInput = ({ label, error, myRef, handleNext, ...others }: IMyInput) => {
    const { style, value, onChangeText, onBlur, ...rest } = others
    const { colorScheme } = useColorScheme()

    return (
        <View className="flex flex-col" style={style}>
            <View className="flex-row items-center">
                <Text className="pl-1.5 mb-1 text-sm text-gray-500 dark:text-gray-400 mr-2">{label}</Text>
            </View>
            <TextInput
                ref={myRef}
                className={`${
                    error ? "border border-primary-main" : ""
                }  py-2.5 px-4 rounded-xl bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300`}
                selectionColor={TailwindTheme.colors.primary}
                cursorColor={TailwindTheme.colors.primary}
                placeholderTextColor={
                    colorScheme === "light" ? TailwindTheme.colors.gray[500] : TailwindTheme.colors.gray[400]
                }
                placeholder={others.placeholder || label}
                caretHidden={false}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                onSubmitEditing={() => {
                    if (handleNext) {
                        handleNext()
                    } else {
                        Keyboard.dismiss()
                    }
                }}
                // onKeyPress={event => {
                //     console.log("hgjg")
                //     if (event.nativeEvent.key === "Backspace") {
                //         const ttt = myRef as any
                //         ttt.current.blur()
                //     }
                // }}
                returnKeyType={handleNext ? "next" : "done"}
                {...rest}
            />
            {error && (
                <View className="flex-row items-center mt-1 mx-2">
                    {/* <Icon name="info" style={{ color: "red", marginEnd: 5 }} size={16} /> */}
                    <Text className="text-primary-main mr-2">{error || "This field is required!"}</Text>
                </View>
            )}
        </View>
    )
}

interface IMyInputWithRHF<T extends FieldValues> extends IMyInput {
    name: Path<T>
    control: Control<T>
    rules?: RuleType
}

export default function MyInputWithRHF<T extends FieldValues>({
    name,
    label,
    control,
    rules,
    myRef,
    handleNext,
    ...others
}: IMyInputWithRHF<T>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => {
                return (
                    <MyInput
                        myRef={myRef || ref}
                        label={label}
                        handleNext={handleNext}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        error={error?.message}
                        {...others}
                    />
                )
            }}
        />
    )
}
