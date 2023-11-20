export default function AppStoreBadge({ link }: { link: string }) {
    const appStoreBannerStyle = {
        display: "inline-block",
        overflow: "hidden",
        borderRadius: "13px",
        width: "250px",
        height: "83px",
    }
    const appStoreBannerImageStyle = {
        width: "250px",
        height: "83px",
        border: "0px"
    }

    return (
        <a href={link} style={appStoreBannerStyle}>
            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1600646400" alt="Download on the App Store" style={appStoreBannerImageStyle} />
        </a>
    )
}