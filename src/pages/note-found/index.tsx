import noteFoundImages from "../../assets/images/page/note-found/note.avif"
const NoteFound = () => {
    return (
        <>
            <div style={{ minHeight: "calc(100vh - 230px)" }} className="container">
                <div style={{ position: "relative", }}>
                    <img src={noteFoundImages} style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="note found images" />
                </div>
            </div>
        </>
    )
}

export default NoteFound