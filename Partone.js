import Parttwo from './Parttwo';
import './form.css';
import TextField from '@mui/material/TextField';

function Partone(){
    return(
        <div>
            <div className="container">
                <div className='head'>
                    <h1 className="heading mt-5 mx-2 fw-bold">शाळा सोडल्याचे प्रमाणपत्र</h1>
                </div>
                <div className="mt-4">
                    <div class="row mb-4">
                        <h5 className='detail mb-4 fw-bold'>विद्यार्थ्यांची माहिती :</h5>
                            <label for="" className=" col-sm-3 form-label fw-bold id">स्टुडंट आय.डी :</label>
                                <div className="col-sm-9">
                                    <TextField fullWidth required label="स्टुडंट आय.डी" id="fullWidth" variant="standard"/>
                                </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <label for="" class="col-sm-3 form-label fw-bold id ">यु आय.डी.नं. (आधार कार्ड क्रमांक) :</label>
                    <div class="col-sm-9">
                        <TextField fullWidth required label="१२ अंकी आधार क्रमांक" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="" class="col-sm-3 form-label fw-bold id">विद्यार्थ्याचे नाव :</label>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="पहिले नाव" id="fullWidth" variant="standard"/>
                    </div>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="वडिलांचे नाव" id="fullWidth" variant="standard"/>
                    </div>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="आडनाव" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="" class="col-sm-3 form-label fw-bold id">आईचे नाव :</label>
                    <div class="col-sm-9">
                    <TextField fullWidth required label="आईचे नाव" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="" class="col-sm-3 form-label fw-bold id">राष्ट्रीयत्व :</label>
                    <div class="col-sm-9">
                        <TextField fullWidth required label="राष्ट्रीयत्व" id="fullWidth" variant="standard"/>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div class="col-sm-3 id">
                        <label for="" class="form-label fw-bold">मातृभाषा :</label>
                    </div>
                    <div class="col-sm-9">
                        <TextField fullWidth required label="मातृभाषा" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="form-label fw-bold">धर्म :</label>
                    </div>
                    <div class="col-sm-9">
                        <TextField fullWidth required label="धर्म" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="form-label fw-bold">जात :</label>
                    </div>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="जात" id="fullWidth" variant="standard"/>
                    </div>
                    <div class="col-sm-3 id1">
                        <label for="" class="form-label fw-bold">पोट-जात :</label>
                    </div>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="पोट-जात" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="form-label fw-bold">जन्म-स्थळ (गाव / शहर) :</label>
                    </div>
                    <div class="col-sm-4">
                        <TextField fullWidth required label="गाव" id="fullWidth" variant="standard"/>
                    </div>
                    <div class="col-sm-5">
                        <TextField fullWidth required label="शहर" id="fullWidth" variant="standard"/>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="form-label fw-bold">तालुका :</label>
                    </div>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="तालुका" id="fullWidth" variant="standard"/>
                    </div>
                    <div class="col-sm-3 id1">
                        <label for="" class="form-label fw-bold">जिल्हा :</label>
                    </div>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="जिल्हा" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="form-label fw-bold">जन्म तारीख :</label>
                    </div>
                    <div class="col-sm-4 id">
                        <TextField required fullWidth id="datetime-local" label="" type="date" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="col-form-label fw-bold">जन्म तारीख अक्षरी :</label>
                    </div>
                    <div class="col-sm-9">
                        <TextField fullWidth required label="जन्म तारीख अक्षरी " id="fullWidth" variant="standard"/>
                    </div>
                </div>
               
                <Parttwo/>

            </div>
        </div>
    )
}
export default Partone;