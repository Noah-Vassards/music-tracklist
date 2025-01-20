import "./card.css"

export interface CardProps {
    id: string,
    title: string,
    category: string,
    artist: string,
    likes: number,
    dislikes: number,
    onMoveTrackUp: () => void
    onMoveTrackDown: () => void
    onLikeTrack: () => void
    onDislikeTrack: () => void
}

export function Card(props: CardProps) {
    return (
        <div className="track-card">
            <div className="header">
                <div>
                    <strong>{props.title}</strong>
                    <div className="artist">{props.artist}</div>
                </div>
                <span className="category">{props.category}</span>
            </div>
            <div className="actions">
                <div className="likes">
                    <button className="like-btn" onClick={props.onLikeTrack}>👍</button>
                    <span>{props.likes}</span>
                </div>
                <div className="dislikes">
                    <button className="dislike-btn" onClick={props.onDislikeTrack}>👎</button>
                    <span>{props.dislikes}</span>
                </div>
            </div>
            <div className="move-buttons">
                <button className="move-btn" onClick={props.onMoveTrackUp}>⬆️</button>
                <button className="move-btn" onClick={props.onMoveTrackDown}>⬇️</button>
            </div>
        </div>
    );
}