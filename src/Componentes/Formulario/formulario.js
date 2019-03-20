import React, { Component } from 'react'

class Formulario extends Component {
    render(){
        return(
            <div className="jumbotron blue">
                <form>
                    <div className="profilePicture">
                        <img src="http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png" id="profilePicture" />
                    </div>
                    <div class="form-group row">
                        <label  className="col-md-3 col-form-label text-left">¿Cuál es su nombre?</label>
                        <div className="col-md-9 form-group">
                                <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label  className="col-md-3 col-form-label text-left">¿Cuál es su número de teléfono?</label>
                        <div className="col-md-9 form-group">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label  className="col-md-3 col-form-label text-left">¿Cuál es el nombre de su emprendimiento?</label>
                        <div className="col-md-9 form-group">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label  className="col-md-3 col-form-label text-left">¿De qué trata su emprendimiento?</label>
                        <div className="col-md-9 form-group">
                            <textarea className="form-control"/>
                        </div>
                    </div>
                </form>
           </div>
        )
    }
}
export default Formulario;