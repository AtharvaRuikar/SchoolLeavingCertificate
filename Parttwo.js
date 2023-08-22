import './form.css';
import TextField from '@mui/material/TextField';

function Parttwo (){
    return(
        <div>
            <div class="row mb-4">
            <h5 className='detail mt-5 mb-4 fw-bold'>शाळेची माहिती  :</h5>
                <div class="col-sm-3 id">
                    <label for="" class="form-label fw-bold">ही पूर्वीची शाळा व इयत्ता :</label>
                </div>
                <div class="col-sm-4">
                    <TextField fullWidth required label="ही पूर्वीची शाळा" id="fullWidth" variant="standard"/>
                </div>
                <div class="col-sm-5">
                    <TextField fullWidth required label="इयत्ता" id="fullWidth" variant="standard"/>
                </div>
            </div>

            <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="col-form-label fw-bold">या शाळेत प्रवेश घेतलेली तारीख :</label>
                    </div>
                    <div class="col-sm-3 id">
                        <TextField required fullWidth id="datetime-local" label="" type="date" variant="standard"/> 
                    </div>

                    <div class="col-sm-3 id1">
                        <label for="" class="col-form-label fw-bold">इयत्ता :</label>
                    </div>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="इयत्ता" id="fullWidth" variant="standard"/>
                    </div>
            </div>

            <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="form-label fw-bold">अभ्यसातिल प्रगती :</label>
                    </div>
                    <div class="col-sm-9">
                        <TextField fullWidth required label="अभ्यसातिल प्रगती" id="fullWidth" variant="standard"/>
                    </div>
            </div>

            <div class="row mb-4">
                <div class="col-sm-3 id">
                    <label for="" class="form-label fw-bold">वर्तनुक :</label>
                </div>
                <div class="col-sm-3">
                    <TextField fullWidth required label="वर्तनुक" id="fullWidth" variant="standard"/>
                </div>
                <div class="col-sm-3 id1">
                    <label for="" class="form-label fw-bold">शाळा सोडल्याची तारीख :</label>
                </div>
                <div class="col-sm-3 id">
                    <TextField required fullWidth id="datetime-local" label="" type="date" variant="standard"/> 
                </div>
            </div>

            

                <div class="row mb-4">
                    <div class="col-sm-3">
                        <label for="" class="col-form-label fw-bold">कोनत्या इयत्ता मध्‍ये शिकत होता व केव्हापासुन (अक्षरी व अंकी) :</label>
                    </div>
                    <div class="col-sm-9">
                        <TextField fullWidth required label="कोनत्या इयत्ता मध्‍ये शिकत होता व केव्हापासुन" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="col-form-label fw-bold">शाळा सोडन्याचे कारन :</label>
                    </div>
                    <div class="col-sm-9">
                        <TextField fullWidth required label="शाळा सोडन्याचे कारन" id="fullWidth" variant="standard"/>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-sm-3 id">
                        <label for="" class="col-form-label fw-bold">शेरा :</label>
                    </div>
                    <div class="col-sm-9">
                    <TextField fullWidth required label="शेरा" id="fullWidth" variant="standard"/>
                    </div>
                </div>

                

                <div class="row mb-4">
                    <label for="" class=" col-sm-3 col-form-label fw-bold">तारीख :</label>
                    <div class="col-sm-3">
                        <TextField required fullWidth id="datetime-local" label="" type="date" variant="standard"/> 
                    </div>
                </div>
                
                <div class="row mb-4">
                    <label for="" class=" col-sm-3 id form-label fw-bold">वर्ग  शिक्षक  :</label>
                    <div class="col-sm-4">
                    <TextField fullWidth required label="वर्ग  शिक्षक " id="fullWidth" variant="standard"/>
                    </div>
                    <div class="col-sm-2 id1">
                        <label for="" class="col-form-label fw-bold">लेखनिक :</label>
                    </div>
                    <div class="col-sm-3">
                        <TextField fullWidth required label="लेखनिक" id="fullWidth" variant="standard"/>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class=" mt-4 d-flex justify-content-center">
                        <button type="submit" class="btn btn-outline-success fw-bold" >सबमिट</button>
                    </div>
                </div>
        </div>
    )
}
export default Parttwo ; 