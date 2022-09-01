const RepoInfo = ({repo}) => {

    let license;

    switch (repo.licenseInfo?.spdxId) {
        case "NOASSERTION":
            license = (
                <span className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-warning" style={{fontSize: ".8em"}}>
                    {repo.licenseInfo.spdxId}
                </span>
            )
        break;
        case undefined:
            license = (
                <span className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-danger" style={{fontSize: ".8em"}}>
                    NO LICENSE
                </span>
            )
        break;
        default:
            case undefined:
                license = (
                    <span className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-outline-success" style={{fontSize: ".8em"}}>
                        {repo.licenseInfo.spdxId}
                    </span>
                )
            break;
        break;
    }

    return (
        <li className="list-group-item" key={repo.id.toString()}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <a className="h5 mb-0 text-decoration-none" href="{repo.url}">
                        {repo.name}
                    </a>
                    <p className="small">{repo.description}</p>
                </div>
                <div className="text-nowrap ms-3">
                    {license}
                    <span className={
                        "px-1 py-1 ms-1 d-inline-block btn btn-sm " +
                        (repo.viewerSubscription == "SUBSCRIBED" ? "btn-success" : "btn-outline-secondary") 
                    } style={{fontSize: ".8em"}}>
                        {repo.viewerSubscription}
                    </span>
                </div>
            </div>
        </li>
    )
}

export default RepoInfo;