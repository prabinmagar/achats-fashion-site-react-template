import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "../themes/default";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: inherit;
    }

    html {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -webkit-text-size-adjust: 100%;
    }

    body {
        min-height: 100vh;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.6;
        font-family: ${defaultTheme.font_family_inter};
        color: ${defaultTheme.color_jet};
    }

    ul {
        list-style-type: none;
    }

    a {
        transition: ${defaultTheme.default_transition};
    }

    button {
        border: none;
        cursor: pointer;
        background-color: transparent;
        transition: ${defaultTheme.default_transition};
    }

    /* flexbox and grid */
    .flex {
        display: flex;
        &-col {
            flex-direction: column;
        }
        &-wrap {
            flex-wrap: wrap;
        }
    }

    .inline-flex {
        display: inline-flex;
    }

    .items {
        &-center {
            align-items: center;
        }
        &-start {
            align-items: flex-start;
        }
        &-end {
            align-items: flex-end;
        }
        &-stretch {
            align-items: stretch;
        }
    }

    .justify {
        &-center {
            justify-content: center;
        }
        &-between {
            justify-content: space-between;
        }
        &-start {
            justify-content: flex-start;
        }
        &-end {
            justify-content: flex-end;
        }
    }

    .grid {
        display: grid;
    }

    .object-fit-cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        object-position: top;
    }
    .no-wrap {
        white-space: nowrap;
    }

    .resize-animation-stopper * {
        animation: none !important;
        transition: none !important;
    }

    // heights and width
    .h-full {
        height: 100%;
    }

    .w-full {
        width: 100%;
    }

    // font weights
    .font-light {
        font-weight: 300;
    }
    .font-normal {
        font-weight: 400;
    }
    .font-medium {
        font-weight: 500;
    }
    .font-semibold {
        font-weight: 600;
    }
    .font-bold {
        font-weight: 700;
    }
    .font-extrabold {
        font-weight: 800;
    }

    // text
    [class^="text"] {
        color: ${defaultTheme.color_outerspace};
    }

    .text-white {
        color: ${defaultTheme.color_white}!important;
    }
    .text-gray {
        color: ${defaultTheme.color_gray};
    }
    .text-black {
        color: ${defaultTheme.color_black};
    }
    .text-sea-green {
        color: ${defaultTheme.color_sea_green};
    }
    .text-red {
        color: ${defaultTheme.color_red};
    }
    .text-platinum {
        color: ${defaultTheme.color_platinum};
    }
    .text-yellow {
        color: ${defaultTheme.color_yellow};
    }
    .text-jet {
        color: ${defaultTheme.color_jet};
    }
    .text-outerspace {
        color: ${defaultTheme.color_outerspace};
    }
    .text-silver {
        color: ${defaultTheme.color_silver};
    }

    .text-start {
        text-align: left;
    }
    .text-end {
        text-align: right;
    }
    .text-underline {
        text-decoration: underline;
    }
    .text-center {
        text-align: center;
    }

    .uppercase {
        text-transform: uppercase;
    }
    .capitalize {
        text-transform: capitalize;
    }
    .italic {
        font-style: italic;
    }

    // backgrounds
    .bg-white {
        background-color: ${defaultTheme.color_white};
    }
    .bg-gray {
        background-color: ${defaultTheme.color_gray};
    }
    .bg-black {
        background-color: ${defaultTheme.color_black};
    }
    .bg-sea-green {
        background-color: ${defaultTheme.color_sea_green};
    }
    .bg-red {
        background-color: ${defaultTheme.color_red};
    }
    .bg-platinum {
        background-color: ${defaultTheme.color_platinum};
    }
    .bg-yellow {
        background-color: ${defaultTheme.color_yellow};
    }
    .bg-jet {
        background-color: ${defaultTheme.color_jet};
    }
    .bg-purple {
        background-color: ${defaultTheme.color_purple};
    }
    .bg-transparent {
        background-color: transparent;
    }
    .bg-outerspace {
        background-color: ${defaultTheme.color_outerspace};
    }

    // negative margin
    .-mt-4 {
        margin-top: -16px;
        display: block;
    }

    // image
    .img-fluid {
        width: 100%;
        display: block;
    }

    // scrollbar
    .scrollbar-x {
        overflow-x: scroll;
        &::-webkit-scrollbar {
            height: 6px;
        }

        &::-webkit-scrollbar-track {
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: grey;
        }
    }

    @media screen and (max-width: 420px) {
        .container {
            padding: 0 16px !important;
        }
    }

    // page
    .page-py-spacing {
        padding-top: 48px !important;
        padding-bottom: 48px !important;
    }

    .sm-spacing {
        @media screen and (max-width: 575.98px) {
            padding: 16px !important;
        }
    }

    // typography
    a {
        text-decoration: none;
        color: ${defaultTheme.color_jet};
    }

    .text-xs {
        font-size: 12px;
    }
    .text-sm {
        font-size: 13px;
    }
    .text-base {
        font-size: 14px;
    }
    .text-lg {
        font-size: 15px;
    }
    .text-xl {
        font-size: 16px;
    }
    .text-xxl {
        font-size: 18px;
    }
    .text-3xl {
        font-size: 20px;
    }

    @media screen and (max-width: 575.98px){
        .text-xs {
            font-size: 11px !important;
        }
        .text-sm {
            font-size: 12px !important;
        }
        .text-base {
            font-size: 13px !important;
        }
        .text-lg {
            font-size: 14px !important;
        }
        .text-xl {
            font-size: 15px !important;
        }
        .text-xxl {
            font-size: 17px !important;
        }
        .text-3xl {
            font-size: 19px !important;
        }
    }

    @media screen and (max-width: 420px) {
        .text-xs {
            font-size: 10px !important;
        }
        .text-sm {
            font-size: 11px !important;
        }
        .text-base {
            font-size: 12px !important;
        }
        .text-lg {
            font-size: 13px !important;
        }
        .text-xl {
            font-size: 14px !important;
        }
        .text-xxl {
            font-size: 16px !important;
        }
        .text-3xl {
            font-size: 18px !important;
        }
    }
`;
