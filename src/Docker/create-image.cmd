docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testnewgenx2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testnewgenx2/app ../..
