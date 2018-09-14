import com.example.demo.BackApplication
import groovyx.net.http.HttpResponseDecorator
import groovyx.net.http.RESTClient
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.web.server.LocalServerPort
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT

/**
 * @Author mahdchek.
 */

@SpringBootTest(webEnvironment = RANDOM_PORT)
@ContextConfiguration(classes = [BackApplication.class])
class RestServiceTest extends Specification {

    @LocalServerPort
    int port

    RESTClient client

    void setup() {
        println 'the selected port  = ' + port
        client = new RESTClient("http://localhost:$port")
        client.headers['header-name'] = 'header value'
        client.handler.failure = { resp, data ->
            resp.data = data
            resp
        }
    }

    def 'it should '() {
        when:
        ('summing two numbers')
        HttpResponseDecorator result = client.get(path: '/test-app')
        then:
        ('expect result')
        result.status == 200
    }
}
