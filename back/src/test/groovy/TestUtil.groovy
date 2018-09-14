/*
 * Copyright (c) RTE 2016 All rights reserved
 * This file and the information it contains are property of RTE and confidential.
 * They shall not be reproduced nor disclosed to any person except to those having
 * a need to know them without prior written consent of RTE.
 */



import groovyx.net.http.HttpResponseDecorator
import groovyx.net.http.RESTClient
import org.apache.http.client.HttpResponseException

/**
 * Some useful helper methods for testing.
 *
 * @author Nicolas Estrada.
 */
class TestUtil {

    /**
     * Improved REST client which is more explicit when bad requests are made.
     * @param port the local port.
     */
    static RESTClient newRestClient(int port) {
        RESTClient client = new RESTClient("http://localhost:$port")
        client.headers['REMOTE-USER'] = 'uid=karine.epely,uid=17X100A100A0001A,ou=Users,o=rte'
        client.handler.failure = { HttpResponseDecorator resp ->
            int status = resp.status
            def headers = resp.headers.inject('') { all, h ->
                all + "${h.name} : ${h.value}\n"
            }.trim()
            def message = """
HTTP call failed.
Status code : $status
$headers
${resp.entity.content.text}"""
            throw new HttpResponseException(status, message)
        }
        client
    }

}
