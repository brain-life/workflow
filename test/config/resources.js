'use strict';

module.exports = {
    bigred2: {
        type: "pbs",
        name: "IU / BigRed2", 
        hostname: "bigred2.uits.iu.edu",
        desc: "IU's high performance computing cluster",
        workdir: "/N/dc2/scratch/__username__/sca/workflows",
        default: {
            ssh_public: true, //this causes resource router to generate new ssh key
        },

        //services supported by this resource and score
        services: {
            "soichih/sca-service-hpss": {score: 10},
            "soichih/sca-product-nifti": {score: 10},
        }
    },
    karst: {
        type: "pbs",
        name: "IU / Karst", 
        desc: "IU's high throughput computing cluster",
        hostname: "karst.uits.iu.edu",
        workdir: "/N/dcwan/scratch/__username__/sca/workflows",
        default: {
            ssh_public: true, //this causes resource router to generate new ssh key
        },
        
        //services supported by this resource
        services: {
            "soichih/sca-service-freesurfer": {score: 10},
            "soichih/sca-service-hpss": {score: 10},
            "soichih/sca-service-download": {score: 10},
            "soichih/sca-service-life": {score: 10},

            //for kd backup tool
            "soichih/sca-service-tgzpipe": {score: 10},

            "soichih/sca-product-nifti": {score: 10},
            "soichih/sca-product-raw": {score: 10},
            "soichih/sca-product-life": {score: 10},
            "soichih/sca-product-odi": {score: 10},

            "_upload": {score: 10},
        }    
    },
    /*
    gw183: {
        type: "jetstream-vm", 
        name: "gw183.iu.xsede.org", 
        desc: "IU's high throughput computing cluster",
        hostname: "gw183.iu.xsede.org",
        workdir: "/home/__username__/sca/workflows",
        default: {
            ssh_public: true, //this causes resource router to generate new ssh key
        },
        //services supported by this resource
        services: [],
    },
    */
    mason: {
        type: "pbs", 
        name: "IU / Mason", 
        desc: "IU's high memory computing cluster",
        hostname: "mason.uits.iu.edu",
        workdir: "/N/dc2/scratch/__username__/sca/workflows",
        default: {
            ssh_public: true, //this causes resource router to generate new ssh key
        },
        
        //services supported by this resource
        services: {
            "soichih/sca-service-hpss": {score: 10},
            "soichih/sca-product-nifti": {score: 10},
            "soichih/sca-service-blast": {score: 10},
        }       
    },
    
    /*
    dtaxfer: {
        type: "xfer", 
        name: "BigRed2 Data Transfer Node",
        desc: "Allows fast data transfer between IU file systems.",
        hostname: "dataxfer.bigred2.uits.iu.edu",
        workdir: "/N/dc2/scratch/__username__/sca/workflows",
        default: {
            ssh_public: true, //this causes resource router to generate new ssh key
        },
        supports: [],
    },
    */
    osgxd: {
        type: "osg", 
        name: "Open Science Grid (xd-login)", 
        desc: "National distributed high throughput computing cluster",
        hostname: "xd-login.opensciencegrid.org",
        workdir: "/local-scratch/__username__/sca/workflows",
        default: {
            ssh_public: true, //this causes resource router to generate new ssh key
        },
        //services supported by this resource
        services: {
            "soichih/sca-service-hpss": {score: 5},
            "soichih/sca-service-osgblast": {score: 10},
        }
    },
    sda: {
        type: "hpss", 
        name: "IU / Scholary Data Archive", 
        hostname: "hsi.mdss.iu.edu", 
        //port: "1219",
        desc: "IU's HPSS (Tape Archive) system which allows you to store research data",
        default: {
            auth_method: 'keytab',
        },
    },

    q6: {
        type: "docker", 
        name: "Q6 SCA docker executioner", 
        desc: "Handles SCA ",
        hostname: "q6.sca.iu.edu",
        workdir: "/home/__username__/workflows", //could run out of disk easily
        //workdir: "/N/dcwan/scratch/__username__/q6/workflows", //causes workflow output directory to lock up with -- Device or resource busy
        default: {
            ssh_public: true, //this causes resource router to generate new ssh key
        },
        //services supported by this resource
        services: {
            "soichih/sca-service-qr": {score: 10},
            "soichih/sca-service-fits2png": {score: 10},
            "soichih/sca-product-raw": {score: 5},

            "_upload": {score: 5},
        }
    },
}
