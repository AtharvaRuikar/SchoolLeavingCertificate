function Form()
{
    return(
        <>
        <div class="container">
        <div class="heading mt-5 mx-2">
            <h1>शाळा सोडल्याचे प्रमाणपत्र</h1>
        </div>
        <div class="container mt-5">
            <form action="" method="post">
                <fieldset class="form-group border p-3 pt-4">
                <div class="row mb-4">
                    <label for="" class="col-sm-3 col-form-label fw-bold">स्टुडंट आय.डी :</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="" class="col-sm-3 col-form-label fw-bold">यु आय.डी.नं. (आधार कार्ड क्रमांक) :</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control input_style" placeholder="१२ अंकी आधार क्रमांक" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="" class="col-sm-3 col-form-label fw-bold">विद्यार्थ्याचे नाव :</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" placeholder="पहिले नाव"required/>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style " placeholder="वडिलांचे नाव" required/>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" placeholder="आडनाव" required/>
                    </div>
                </div>
                

                <div class="row mb-4">
                    <label for="" class="col-sm-3 col-form-label fw-bold">आईचे नाव :</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="" class="col-sm-2 col-form-label fw-bold">राष्ट्रीयत्व :</label>
                    <div class="col-sm-4">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-2 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">मातृभाषा :</label>
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-1">
                        <label for="" class="col-form-label fw-bold">धर्म :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-1 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">जात :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-1 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">पोट-जात :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-2">
                        <label for="" class="col-form-label fw-bold">जन्म-स्थळ (गाव / शहर) :</label>
                    </div>
                    <div class="col-sm-2">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-1 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">तालुका :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-1 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">जिल्हा :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-1 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">राज्य :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-1 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">देश :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3">
                        <label for="" class="col-form-label fw-bold">जन्म तारीख :</label>
                    </div>
                    <div class="col-sm-4">
                        <input type="date" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3">
                        <label for="" class="col-form-label fw-bold">जन्म तारीख अक्षरी :</label>
                    </div>
                    <div class="col-sm-9">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-3">
                        <label for="" class="col-form-label fw-bold">ही पूर्वीची शाळा व इयत्ता :</label>
                    </div>
                    <div class="col-sm-9">
                        <input type="text" class="form-control input_style " required/>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-sm-3">
                        <label for="" class="col-form-label fw-bold">या शाळेत प्रवेश घेतलेली तारीख :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="date" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-3 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">इयत्ता :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-2">
                        <label for="" class="col-form-label fw-bold">अभ्यसातिल प्रगती :</label>
                    </div>
                    <div class="col-sm-2">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-1 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">वर्तनुक :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-2 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">शाळा सोडल्याची तारीख :</label>
                    </div>
                    <div class="col-sm-2">
                        <input type="date" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-4">
                        <label for="" class="col-form-label fw-bold">कोनत्या इयत्ता मध्‍ये शिकत होता व केव्हापासुन (अक्षरी व अंकी) :</label>
                    </div>
                    <div class="col-sm-8">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-sm-2">
                        <label for="" class="col-form-label fw-bold">शाळा सोडन्याचे कारन :</label>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-2 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">शेरा :</label>
                    </div>
                    <div class="col-sm-2">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>

                

                <div class="row mb-4">
                    <label for="" class=" col-sm-3 col-form-label fw-bold">तारीख :</label>
                    <div class="col-sm-3">
                        <input type="date" class="form-control input_style" required/>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <label for="" class=" col-sm-3 col-form-label fw-bold">वर्ग  शिक्षक  :</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                    <div class="col-sm-3 text-end pe-3">
                        <label for="" class="col-form-label fw-bold">लेखनिक :</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control input_style" required/>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class=" mt-4 d-flex justify-content-center">
                        <button type="submit" class="btn btn-outline-success fw-bold" >सबमिट</button>
                    </div>
                </div> 
                
                </fieldset>
            </form>
        </div>
        </div>
        </>
    )
}
export default Form;