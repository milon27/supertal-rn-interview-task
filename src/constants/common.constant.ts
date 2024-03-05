export const CommonConstant = {
    PAGE_SIZE: 10,
    CURRENCY: "USD",
    NAME_STRING: /^[a-zA-Z0-9\u0980-\u09FF_ -]+$/u,
    STRING_NUM_SPACE_PATTERN: "^[a-zA-Z0-9 _-]+$",
    STRING_NUM_PATTERN: `^-?(\\d?)+(\\.\\d+)?$`, // any number (negative and positive)
    STRING_NUM_PATTERN_NON_NEG: `^(\\d?)+(\\.\\d+)?$`, // only positive
    MAX_NUM_AMOUNT: 1_000_000, // one million
    MAX_OLD_MONTH: 5,
}
