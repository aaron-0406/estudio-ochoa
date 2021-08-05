import SectionTable from './SectionTable'

const Inventario = () => {
    return (
        <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <SectionTable />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
            {/* /.control-sidebar */}
        </div>
    );
}

export default Inventario;