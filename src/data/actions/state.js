// an addPlayer action creator which is sent to the reducer

export const addPlayer = (id, name) => {
    return { type: "add", id: id, name: name };

};

