/**
 * @format
 */

import React from "react"
import "react-native"
// Note: import explicitly to use the types shipped with jest.
import { expect, it } from "@jest/globals"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import { MovieService } from "../src/services/movie/movie.service"
import { DateUtil } from "../src/utils/date.util"
import { MyInput } from "../src/views/components/common/form/my-input"
import TestScreen from "../src/views/screens/test.screen"

// #1 Simple Component Test

it("test screen renders correctly", () => {
    const result = renderer.create(<TestScreen />).toJSON()
    expect(result).toBeDefined()
})

it("Text Input screen renders correctly", () => {
    const result = renderer.create(<MyInput label="label" />).toJSON()
    expect(result).toBeDefined()
})

// #2 Simple Function Test

it("Get Year", () => {
    const result = DateUtil.getYear(new Date().toDateString())
    expect(result).toBe("2024")
})

// #3 Async Function Test
it("Get Popular Movies", async () => {
    const result = await MovieService.getPopular()
    expect(result.results).toBeDefined()
})
