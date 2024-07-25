
interface IndicatorCardProps {
    cardTitle: string,
    cardCount: string,
    cardIcon: JSX.Element,
    // cardIconColor : string,
    // cardIconSize : number,
    // cardIconBackground : string,
}

export const IndicatorCard: React.FC<IndicatorCardProps> = ({ cardTitle, cardCount, cardIcon }) => {
    return (
        <div>
            <div className="bg-white shadow-sm rounded-xl p-5 cursor-pointer">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-[20px] text-ash font-semibold">{cardTitle}</h4>
                        <p className="text-[36px] text-ash font-bold">{cardCount}</p>
                    </div>

                    <div>
                        <div className="text-[48px] text-closeRed">
                            {cardIcon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
