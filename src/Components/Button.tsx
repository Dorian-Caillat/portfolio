
interface Props {
    name: string,
    isBeam: boolean,
    containerClass: string
}

const Button = ({name, isBeam = false, containerClass}: Props) => {
    
    return (
        <button className={`btn $${containerClass}`}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping" />
                    <span className="btn-ping_dot" />
                </span>
            )}
            {name}
        </button>
    )
}

export default Button;