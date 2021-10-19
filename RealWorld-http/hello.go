package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
)

//브라우저나 curl 커맨드 등 클라이언트가 접속시 호출
//클라이언트의 요청정보를 받아 서버에서 처리한 결과를 응답해 출력
func handler(w http.ResponseWriter, r *http.Request) {
	dump, err := httputil.DumpRequest(r, true)
	if err != nil {
		http.Error(w, fmt.Sprint(err), http.StatusInternalServerError)
		return
	}
	fmt.Println(string(dump))
	fmt.Fprintf(w, "<html><body>hello</body></html>\n")
}

func main() {
	var httpServer http.Server
	http.HandleFunc("/", handler)
	log.Println("start http listening:18888")
	httpServer.Addr = ":18888"
	log.Println(httpServer.ListenAndServe())
}
