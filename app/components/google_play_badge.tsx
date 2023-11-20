export default function GooglePlayBadge({ link }: { link: string }) {
    return (
        <a href={link}>
            <img alt='Get it on Google Play' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2880px-Google_Play_Store_badge_EN.svg.png?20190913154415' style={{ height: "83px" }} />
        </a>
    )
}