#FROM quay.io/keycloak/keycloak:11.0.2
FROM codeeducation/keycloak:11.0.2-fix-translate

COPY .docker/keycloak/realm-config/* /opt/jboss/keycloak/realm-config/

ENV JAVA_OPTS -server \
 -Xms1303m \
 -Xmx1303m \
 -XX:MetaspaceSize=96M \
 -XX:MaxMetaspaceSize=256m \
 -Djboss.modules.system.pkgs=org.jboss.byteman \
 -Djava.awt.headless=true \
 -Djava.net.preferIPv4Stack=true \
 -Dkeycloak.profile.feature.upload_scripts=enabled \
 -Dkeycloak.migration.action=import \
 -Dkeycloak.migration.provider=dir \
 -Dkeycloak.migration.dir=/opt/jboss/keycloak/realm-config \
 -Dkeycloak.migration.strategy=OVERWRITE_EXISTING
