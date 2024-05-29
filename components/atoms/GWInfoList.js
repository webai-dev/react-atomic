import { Box, colors, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import localFont from "@next/font/local";
import PropTypes from "prop-types";
import Colors from "../../colors/colors";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";

const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })
const avenirBlack = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Black.otf' })

const _GWInfoList = styled(Paper)({
    background: Colors.white,
    border: "1px solid rgba(127, 129, 140, 0.18)",
    boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
    borderRadius: "25px",
    flex: 1,
    minHeight: "460px",
    height: "inherit",
    padding: "40px 32px",
    "@media (max-width: 1000px)": {
        minHeight: "0px",
    }
});

const _GWTitle = styled(Typography)({
    fontStyle: "normal",
    fontFamily: avenir.style,
    fontWeight: 800,
    fontSize: "22px",
    lineHeight: "28px",
    marginBottom: "24px",
    color: Colors.grey500
})


const _GWText = styled(Box)({
    fontStyle: "normal",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    marginBottom: "10px",
    fontFamily: avenir.style,
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "28px",
    color: Colors.grey400
})

const GWInfoList = ({ title, data }) => {
    const { t } = useTranslation("common");

    return (
        <_GWInfoList>
            <_GWTitle variant="h3" className={avenirBlack.className}>{t(title)}</_GWTitle>
            {data?.map((text, i) => <_GWText key={i}>
                <ReactSVG src="/assets/images/svg/check-circle.svg"  />
                {text}
            </_GWText>)}
        </_GWInfoList>
    )
};

GWInfoList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.string),
}

export default GWInfoList;