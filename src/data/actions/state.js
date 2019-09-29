// an addPlayer action creator which is sent to the reducer

export const addPlayer = (name) => {
    return { type: "add", name: name };

};

