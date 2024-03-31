import { getDataTotalDatasets, getDataTotalDownloads, getDataTotalFiles } from "utils/axios";

export default async function Home() {
    const dadosTotalDownloads = await getDataTotalDownloads();
    const dadosTotalFiles = await getDataTotalFiles();
    const dadosTotalDatasets = await getDataTotalDatasets();

    // console.log({ data })
    return (
        <>

            <div className="bg-slate-200 h-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-center">Dados Analitycs SoilData</h1>
                </div>
            </div>

            <div className="container mx-auto my-6">
                <h1>Metricas Gerais</h1>
                <div className="flex flex-wrap">
                    <div className="w-1/2 p-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg font-bold">Total de Downloads</h2>
                            <p>Downloads: {dadosTotalDownloads.data.count}</p>
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg font-bold">Arquivos Depositados</h2>
                            <p>Arquivos: {dadosTotalFiles.data.count}</p>
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg font-bold">Datasets criados</h2>
                            <p>Datasets: {dadosTotalDatasets.data.count}</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container mx-auto my-6">
                <h1>Metricas</h1>
                <div className="flex flex-wrap">
                    <div className="w-1/2 p-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg font-bold">Total de Downloads</h2>
                            <p>Downloads: {dadosTotalDownloads.data.count}</p>
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg font-bold">Arquivos Depositados</h2>
                            <p>Arquivos: {dadosTotalFiles.data.count}</p>
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg font-bold">Datasets criados</h2>
                            <p>Datasets: {dadosTotalDatasets.data.count}</p>
                        </div>
                    </div>


                </div>
            </div>


        </>
    );
}
