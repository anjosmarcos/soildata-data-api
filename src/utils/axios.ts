import axios from "axios";

type DataProps = {
    "data": {
        "count": number
    }
}

const getDataTotalDownloads = async () => {
    const response = await axios.get<DataProps[]>(
        'https://soildata.mapbiomas.org/api/info/metrics/downloads');
    // console.log(response.data);
    return response.data;

}

const getDataTotalFiles = async () => {
    const response = await axios.get<DataProps[]>(
        'https://soildata.mapbiomas.org/api/info/metrics/files');
    console.log(response.data);
    return response.data;
}


const getDataTotalDatasets = async () => {
    const response = await axios.get<DataProps[]>(
        'https://soildata.mapbiomas.org/api/info/metrics/datasets');
    console.log(response.data);
    return response.data;
}



export { getDataTotalDatasets, getDataTotalDownloads, getDataTotalFiles };

