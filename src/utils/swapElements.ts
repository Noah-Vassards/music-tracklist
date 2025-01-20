import { MusicTrack } from "../assets/musics";

export default function swapElements(arr: MusicTrack[], trackId: string, direction: 1 | -1): MusicTrack[] {
    const updatedData = [...arr]
    console.log("swapping elements")
    const idx = updatedData.findIndex(item => item.id === trackId);
    console.log(idx)

    if ((direction === 1 && idx < updatedData.length - 1) || (direction === -1 && idx > 0)) {
        const tmp = updatedData[idx];
        updatedData[idx] = updatedData[idx + direction]
        updatedData[idx + direction] = tmp
    }

    return updatedData
}