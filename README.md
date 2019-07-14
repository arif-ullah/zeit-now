Deploy App

```console
now
```

Deploy publicly

```console
now -p
```

Upload as directory of assets

```console
now --static
```

View files uploaded as view source

```console
zeit-now-url.sh/_src
```

Environment variables

```console
now -e REACT_APP_GREETING=hello

```

Secret Environment variables

```console
now secret add greeting Hi

```

Custom name to deployment using Alias

```console
now alias oldZeitUrl aliasUrl = aliasUrl.now.sh

```
